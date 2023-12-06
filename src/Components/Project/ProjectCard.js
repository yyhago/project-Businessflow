import { Link } from "react-router-dom"
import styles from "./ProjectCard.module.css"
import { BsFillTrashFill, BsPencil } from "react-icons/bs"

export default function ProjectCard ({ id, name, category, valorTotal, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.cardProject}>
            <h2>{name}</h2>
            <p><span>Orçamento Total:</span> R$: {valorTotal}</p>
            <p className={styles.categoryText}>
            <span className={`${styles[category.toLowerCase()]}`}></span>Categoria: {category}</p>
            <div className={styles.projectCardAction}>
                <Link to={`/editproject/${id}`}>
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}