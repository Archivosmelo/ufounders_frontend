import { useState } from 'react';
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import FadeIn from 'react-fade-in';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch } from 'src/hooks/redux'
import { setUser } from './slice';

import { loginApi } from './api';
import './Login.scss'
import { alertOptions } from 'src/common';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [email, setEmail] = useState<string>("rodrigo@gmail.com")
    const [password, setPassword] = useState<string>("123456")

    const login = async () => {

        const response: any = await dispatch(loginApi.endpoints.login.initiate({ email, password }))
        const error = response?.error?.data?.message

        if (error) {

            // Alert error in redux
            if (Array.isArray(error)) {

                // Alert
                toast.error(error[0], {
                    ...alertOptions,
                    className: 'toast-alert success'
                })

            } else {

                // Alert
                toast.error(error, {
                    ...alertOptions,
                    className: 'toast-alert success'
                })

            }

        } else {

            // Success
            const loginData = response?.data

            if (loginData?.token) {

                // Redux user
                dispatch(setUser({ email: loginData.user.email, username: loginData.user.username }))

                // Local storage
                localStorage.setItem(`${process.env.REACT_APP_STORAGE_KEY}`, loginData.token)

                // Alert
                toast.success("Authenticated", { ...alertOptions, className: 'toast-alert success' })

                // Redirect
                navigate("/");

            }
        }
    }

    return (
        <FadeIn>

            <div className='page'>

                <div className='loginContainer'>

                    <div className='inputForm'>
                        <label htmlFor='user'>Username</label>
                        <input
                            id='user'
                            type="text"
                            value={email}
                            onChange={({ target }) => { setEmail(target.value) }} />
                    </div>

                    <div className='inputForm'>
                        <label htmlFor='pass'>Password</label>
                        <input
                            id='pass'
                            type="password"
                            value={password}
                            onChange={({ target }) => { setPassword(target.value) }} />
                    </div>

                    <div className='inputForm'>
                        <button onClick={login}>
                            Login <BiLogInCircle />
                        </button>
                    </div>

                </div>
            </div>

        </FadeIn>
    )
}

export default Login