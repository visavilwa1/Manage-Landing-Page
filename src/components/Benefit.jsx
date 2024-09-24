import styles from './Benefit.module.css'

// eslint-disable-next-line react/prop-types
function Benefit({number, title, children}) {
    return (
        <div className={styles.benefit}>
            <div className={styles.benefitData}>
            <span>0{number}</span>
            <h3>{title}</h3>
            </div>
            <p>{children}</p>
        </div>
    )
}

export default Benefit
