import { useState } from 'react'
import FadeIn from 'react-fade-in'
import BarLoader from 'react-spinners/BarLoader'
import { BiCloudUpload, BiCloudDownload } from "react-icons/bi";
import { endpoints } from 'src/pages/Clients/api';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import styles from './style.module.scss'
import { setClients } from 'src/pages/Clients/slice';

const Header = () => {

    const { seedDatabase, truncateDatabase } = endpoints

    const dispatch = useAppDispatch()
    const { username } = useAppSelector(state => state.login)
    const { total } = useAppSelector((state) => state.clients)
    const [loadingSeed, setLoadingSeed] = useState(false)
    const [loadingTruncate, setLoadingTruncate] = useState(false)

    const handleSeed = async () => {

        setLoadingSeed(true)

        const seedResponse = await dispatch<any>(seedDatabase.initiate(null))

        if (seedResponse?.data) {
            dispatch(setClients(seedResponse?.data))
        }

        setLoadingSeed(false)
    }

    const handleTruncate = async () => {

        setLoadingTruncate(true)

        const truncateResponse = await dispatch<any>(truncateDatabase.initiate(null))

        if (truncateResponse?.data) {
            dispatch(setClients(truncateResponse?.data))
        }

        setLoadingTruncate(false)
    }

    return (
        <FadeIn>

            <div className={styles.header}>

                <h1>

                    Bienvenido de nuevo, {username}. 👋

                    <div className={styles.buttons}>

                        <button onClick={handleSeed}>
                            <BiCloudUpload />
                            {loadingSeed && <BarLoader color="#000000" loading={true} width={100} />}
                            {!loadingSeed && <div>Seed database</div>}
                        </button>

                        <button onClick={handleTruncate}>
                            <BiCloudDownload />
                            {loadingTruncate && <BarLoader color="#000000" loading={true} width={100} />}
                            {!loadingTruncate && <div>Truncate database</div>}
                        </button>

                    </div>
                </h1>

                <h3>Estas son las {total} personas que han comprado entradas</h3>

            </div>
        </FadeIn>
    )
}

export default Header