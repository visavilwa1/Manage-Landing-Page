import styles from './Button.module.css'

// eslint-disable-next-line react/prop-types
function Button({children}) {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}

export default Button
