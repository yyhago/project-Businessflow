import styles from "./Loading.module.css"
import imgLoading from "../img/progress.png"

export default function Loading () {
    return(
        <div className={styles.loadingContainer}>
            <img className={styles.loading} src={imgLoading} alt="Imagem do carregamento"/>
        </div>
    )
}