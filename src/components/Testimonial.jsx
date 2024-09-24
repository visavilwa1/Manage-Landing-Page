import styles from './Testimonial.module.css'

// eslint-disable-next-line react/prop-types
function Testimonial({num, image, name, handleChange, children}) {
    return (
        <div className={`${styles.testimonial} ${num}`} onDrag={e => handleChange(e)} >
            <img src={image} alt="" className={num} />
            <h3 className={num}>{name}</h3>
            <p className={num}>{children}</p>
        </div>
    )
}

export default Testimonial
