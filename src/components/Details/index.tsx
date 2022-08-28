import { Icons } from 'src/components'
import styles from './style.module.scss'
import { useAppSelector } from 'src/hooks/redux'

const Details = () => {

    const { clientDetails: details } = useAppSelector((state) => state.clients)
    if (!details) return null;
    
    return (
        <div className={styles.detailsContainer}>

            <div className={styles.header}>

                <div className={styles.modalTitle}>
                    <div className={`${styles.imageContainer} ${styles.modal} ${details.present ? styles.present : ''}`}>
                        <Icons type={7} />
                    </div>
                    <div className={styles.username}>
                        <div>{`${details.firstName} ${details.lastName}`}</div>
                        <span>
                            {details.present ? 'Ha entrado' : 'No ha entrado'}
                        </span>
                    </div>
                </div>

            </div>

            <div className={styles.info}>
                <div className={`${styles.labelValue} ${styles.w35}`}>
                    <label>ID</label>
                    <div>{details._id}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w65}`}>
                    <label>Nº de ticket</label>
                    <div>{details.ticket}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w35}`}>
                    <label>Fecha de nacimiento</label>
                    <div>{details.birthdate}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w35}`}>
                    <label>Email</label>
                    <div>{details.email}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w30}`}>
                    <label>Teléfono</label>
                    <div>{details.phone}</div>
                </div>
                <div className={`${styles.labelValue} ${styles.w100}`}>
                    <label>Dirección</label>
                    <div>{details.address}</div>
                </div>
            </div>

        </div>
    )
}

export default Details;