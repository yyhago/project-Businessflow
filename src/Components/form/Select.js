import styles from "./Select.module.css"

export default function Select ({text, name, options, handleOnChange, value}) {
    return(
        <div>
            <label htmlFor={name}>{text}:</label>
            <select className={styles.selectContainer} name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) =>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}