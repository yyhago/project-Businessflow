import styles from "./Select.module.css"

export default function Select ({text, name, options, handleOnChange, value}) {
    return(
        <div>
            <label htmlFor={name}>{text}:</label>
            <select className={styles.selectContainer} name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}