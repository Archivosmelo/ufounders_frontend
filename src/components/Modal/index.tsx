
import styles from './style.module.scss'
import { useAppSelector, useAppDispatch } from 'src/hooks/redux'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toogleVisible } from './slice'

const Modal = ({ children }: any) => {

    const dispatch = useAppDispatch()
    const { visible } = useAppSelector((state) => state.modal)

    return (
        <div className={`${styles.modalOverlay} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.modal}>
                <button onClick={() => { dispatch(toogleVisible(false)) }}>
                    <AiOutlineCloseCircle />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal