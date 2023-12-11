import styles from "./EditProject.module.css";
import Loading from "../Layout/Loading";
import Container from "../Layout/Container";
import ProjectForm from "../Project/ProjectForm";
import Message from "../Layout/Message"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditProject() {
  const { id } = useParams();

  const [editProject, setEditProject] = useState([]);
  const [mostraProjeto, setMostraProjeto] = useState(false);
  const [message, setMessage] = useState()
  const [type, setType] = useState()
  const [mostrarServicoForm, setMostrarServicoForm] = useState(false)

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
    }, 500);
  }, [id]);

  function editPost(project) {
    setMessage('')
    //validação valorTotal
    if (project.valorTotal < project.valor) {
      setMessage('O orçamento não pode ser menor que o custo do seu projeto!')
      setType('erro')
      return false
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEditProject(data);
        setMostraProjeto(false);
        setMessage('Projeto Atualizado com Sucesso!')
        setType('sucesso')
      })
      .catch((err) => console.log(err));
  }

  function toogleProjectForm() {
    setMostraProjeto(!mostraProjeto);
  }

  function toogleServiceForm(){
    setMostrarServicoForm(!mostrarServicoForm)
  }

  return (
    <>
      {editProject.name ? (
        <div className={styles.detalhesProjetos}>
          <Container customClass="column">
            {message && <Message type={type} msg={message}/>}
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
                    <span>Orçamento Utilizado: R$</span> {editProject.valor}
                  </p>
                </div>
              ) : (
                <div className={styles.infoProject}>
                  <ProjectForm handleSubmit={editPost} btnTest="Concluir Edição" projectData={editProject} />
                </div>
              )}
            </div>
            <div className={styles.serviceFomContainer}>
                <h2>Adicionar Serviço:</h2>
                <button onClick={toogleServiceForm} className={styles.btnnewproject}>
                {!mostrarServicoForm ? 'Adicionar Serviço' : 'Fechar'}
              </button>
              <div className={styles.infoProject}>
                {mostrarServicoForm && <div>Formulario do Serviço</div>}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
                <p>Itens de Serviços</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
