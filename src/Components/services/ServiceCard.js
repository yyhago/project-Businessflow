import {BsFillTrashFill} from "react-icons/bs"
import styles from "../Project/ProjectCard.module.css"

export default function ServiceCard({ id, name, valor, description, handleRemove }){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id,valor)
    }

    return(
        <div className={styles.cardProject}>
            <h2>{name}</h2>
            <p>
                <strong>Custo Total:</strong> R$: {valor}
            </p>
            <p>{description}</p>
            <div className={styles.projectCardAction}>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}