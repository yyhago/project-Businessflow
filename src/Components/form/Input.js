import styles from "./Input.module.css"

export default function Input ({type, text, name, placeholder, handleOnChange, value}) {
    return(
        <div>
            <label htmlFor={name}>{text}:</label>
            <input className={styles.inputForm} type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
        </div>
    )
}