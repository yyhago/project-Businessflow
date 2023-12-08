import styles from "./EditProject.module.css";

import Loading from "../Layout/Loading"
import Container from "../Layout/Container"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function EditProject() {
  const { id } = useParams() 

  const [editProject, setEditProject] = useState([]);
  const [mostraProjeto, setMostraProjeto] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Dados da API:", data);
        setEditProject(data);
      })
      .catch((err) => console.log(err));
    }, 500)
  }, [id]);

  function toogleProjectForm(){
      setMostraProjeto(!mostraProjeto)
  }

    return(<>
        {editProject.name ? (
          <div className={styles.detalhesProjetos}>
            <Container customClass="column">
              <div className={styles.containerDetalhes}>
                <h1>Projeto: {editProject.name}</h1>
                <button onClick={toogleProjectForm} className={styles.btnnewproject}>
                  {!mostraProjeto ? 'Editar seu projeto' : 'Fechar'}
                </button>
                {!mostraProjeto ? (
                  <div className={styles.infoProject}>
                    <p>
                      <span>Categoria: </span>{editProject.category.name}
                    </p>
                    <p>
                      <span>Orçamento Total: R$</span> {editProject.valorTotal}
                    </p>
                    <p>
                      <span>Orçamento Utilizado:</span> {editProject.valor}
                    </p>
                  </div>
                ) : (
                  <div className={styles.infoProject}>
                    <p>form</p>
                  </div>
                )}
              </div>
            </Container>
          </div>
        ): (
          <Loading/>
        )}
      </>
    )
}
