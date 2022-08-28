import { Icons } from 'src/components'
import styles from './style.module.scss'
import { FaListUl } from 'react-icons/fa'
import logo from 'src/images/logo.png'
import { useAppDispatch, useAppSelector } from 'src/hooks/redux'
import { toggleOpened } from './slice'
import { useLocation, useNavigate } from 'react-router-dom'
import { BiLogOutCircle } from "react-icons/bi";


const Sidebar = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()
    const { opened } = useAppSelector(state => state.sidebar)

    const activePage = (location.pathname === '/' ? 1 : 0)

    const logout = () => {
        localStorage.setItem(`${process.env.REACT_APP_STORAGE_KEY}`, "")
        navigate('/login')
    }

    return (
        <aside className={`${styles.sidebar} ${opened ? styles.sidebar_opened : ''}`}>

            <div>
                <div
                    className={styles.menu}
                    onClick={() => { dispatch(toggleOpened(!opened)) }}>
                    <FaListUl />

                </div>

                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <nav>
                <ul>
                    <li className={`${activePage === 1 ? styles.active : ''}`}>
                        <Icons type={1} />
                        <div>Clients</div>
                    </li>
                    <li>
                        <Icons type={2} />
                        <div>Learning</div>
                    </li>
                    <li>
                        <Icons type={3} />
                        <div>VIP</div>
                    </li>
                    <li>
                        <Icons type={4} />
                        <div>Graph</div>
                    </li>
                    <li>
                        <Icons type={5} />
                        <div>Vouchers</div>
                    </li>
                    <li>
                        <Icons type={6} />
                        <div>FAQ</div>
                    </li>
                </ul>
            </nav>

            <button
                className={styles.logout}
                onClick={logout}>
                <BiLogOutCircle />
            </button>

        </aside>
    )
}

export default Sidebar