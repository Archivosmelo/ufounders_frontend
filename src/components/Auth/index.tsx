import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { alertOptions } from 'src/common';
import Loading from 'src/pages/Clients/Components/Loading';
import { useCheckPrivateQuery } from './api';

const Auth = ({ children }: any) => {

    const navigate = useNavigate()
    // Last version of localStorage
    const token = localStorage.getItem(`${process.env.REACT_APP_STORAGE_KEY}`)
    const response = useCheckPrivateQuery<any>(token)

    useEffect(() => {

        if (response?.error?.status === 401) {

            toast.error(response?.error?.data?.message, {
                ...alertOptions,
                className: 'toast-alert error'
            })

            navigate('/login')

        } else if (response?.error) {

            console.error(response?.error)

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response])

    if (response.isLoading) return (<Loading />)
    if (response?.data?.can_access) return (<>{children}</>)
    return null
}

export default Auth