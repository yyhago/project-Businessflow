import styles from "./SubmitButton.module.css"

export default function SubmitButton ({text}) {
    return(
        <div>
            <button className={styles.bntCriarProjeto}>{text}</button>
        </div>
    )
}