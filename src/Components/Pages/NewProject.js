import { useNavigate } from "react-router-dom";

import styles from "./NewProject.module.css";
import ProjectForm from "../Project/ProjectForm";
import marketing from "../img/marketing.png";

export default function NewProject() {

  const navigate = useNavigate()

  function createPost(project){

   project.valor = 0
   project.servicos = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    }).then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      navigate('/project', {message:'Projeto Criado Sem Nenhum Erro!'})
    })
    .catch(err => console.log(err))
  }

  return (
    <section className={styles.newProjectContainer}>
      <div className={styles.newProjectContent}>
        <h1>Cadastre um novo <span>projeto!</span></h1>
        <p>Junte-se e organize seus projetos de maneira fácil!<strong className={styles.brStrong}><br/>Primeiro cadastre eles!</strong></p>
        <ProjectForm handleSubmit={createPost} btnTest="Criar Projeto"/>
      </div>
      <img className={styles.newProjectImage} src={marketing} alt="Men Business" />
    </section>
  );
}
