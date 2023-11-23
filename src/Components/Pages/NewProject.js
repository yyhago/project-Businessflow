import styles from "./NewProject.module.css";
import ProjectForm from "../Project/ProjectForm";
import marketing from "../img/marketing.png";

export default function NewProject() {
  return (
    <section className={styles.newProjectContainer}>
      <div className={styles.newProjectContent}>
        <h1>Cadastre um novo <span>projeto!</span></h1>
        <p>Junte-se e organize seus projetos de maneira fácil!<strong className={styles.brStrong}><br/>Primeiro cadastre eles!</strong></p>
        <ProjectForm btnTest="Criar Projeto"/>
      </div>
      <img className={styles.newProjectImage} src={marketing} alt="Men Business" />
    </section>
  );
}
