import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'src/hooks/redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useGetClientsQuery } from './api'
import { Header, Sidebar, Client, Details, Modal } from 'src/components'
import { Client as ClientInterface } from 'src/constants/types';
import { setClients } from './slice';

import DataNotFound from './Components/DataNotFound';
import Loading from './Components/Loading'
import './Clients.scss'

const Clients = () => {

    // Redux state
    const dispatch = useAppDispatch()
    const { list } = useAppSelector((state) => state.clients)

    const [page, setPage] = useState<number>(0)

    // First request
    const { data, isLoading, error } = useGetClientsQuery<any>({ limit: 30, offset: (page * 30) })

    // Local state
    const { opened: sidebarOpened } = useAppSelector(state => state.sidebar)

    useEffect(() => {

        if (data?.list?.length > 0) {

            dispatch(setClients({
                list: list.concat(data?.list),
                total: data.total
            }))

        } else if (!data && !isLoading && error) {
            console.error(error)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return (

        <>

            <div className='page'>

                <Sidebar />

                <main className={`${sidebarOpened ? 'sidebar_opened' : ''} `}>

                    <Header />

                    {isLoading && <Loading />}

                    {!isLoading && list?.length === 0 && <DataNotFound />}

                    {!isLoading && list?.length > 0 && (

                        <div id="clients_list" className='clients_list'>
                            <InfiniteScroll
                                dataLength={list.length} //This is important field to render the next data
                                next={() => { setPage(page + 1) }}
                                hasMore={true}
                                loader={
                                    <Loading />
                                }
                                endMessage={
                                    <p style={{ textAlign: 'center' }}>
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }
                                refreshFunction={() => { }}
                                scrollableTarget="clients_list">

                                {list?.map((client: ClientInterface, index: number) => (

                                    <Client client={client} key={index} />

                                ))}

                            </InfiniteScroll>

                        </div>

                    )}

                </main>

            </div>

            <Modal><Details /></Modal>

        </>
    )
}

export default Clients