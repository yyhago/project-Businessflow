import styles from "./EditProject.module.css";
import Loading from "../Layout/Loading";
import Container from "../Layout/Container";
import ProjectForm from "../Project/ProjectForm";
import Message from "../Layout/Message";
import ServiceForm from "../services/ServiceForm";
import ServiceCard from "../services/ServiceCard"

import { parse, v4 as uuidv4 } from "uuid";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditProject() {
  const { id } = useParams();

  const [editProject, setEditProject] = useState([]);
  const [services, setServices] = useState([]);
  const [mostraProjeto, setMostraProjeto] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();
  const [mostrarServicoForm, setMostrarServicoForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("Dados da API:", data);
          setEditProject(data);
          setServices(data.services || []);
        })
        .catch((err) => console.log(err));
    }, 500);
  }, [id]);

  function editPost(project) {
    setMessage("");
    // validação valorTotal
    if (project.valorTotal < project.valor) {
      setMessage("O orçamento não pode ser menor que o custo do seu projeto!");
      setType("erro");
      return false;
    }
    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEditProject(data);
        setMostraProjeto(false);
        setMessage("Projeto Atualizado com Sucesso!");
        setType("sucesso");
      })
      .catch((err) => console.log(err));
  }

  function createService(project) {
    setMessage("");

    const ultimoServico = project.services[project.services.length - 1];
    ultimoServico.id = uuidv4();

    const ultimoServicoValor = ultimoServico.valor;
    const novoValor =
      parseFloat(project.valor) + parseFloat(ultimoServicoValor);

    if (novoValor > parseFloat(project.valorTotal)) {
      // VALIDAÇÃO DO SERVIÇO
      setMessage("Orçamento ultrapassado, verifique o valor do serviço!");
      setType("erro");
      project.services.pop();
      return false;
    }

    project.valor = novoValor;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServices(data.services || []);
        setMostrarServicoForm(false)
      })
      .catch((err) => console.log(err));
  }

  function removeService(){

  }

  function toogleProjectForm() {
    setMostraProjeto(!mostraProjeto);
  }

  function toogleServiceForm() {
    setMostrarServicoForm(!mostrarServicoForm);
  }

  return (
    <>
      {editProject.name ? (
        <div className={styles.detalhesProjetos}>
          <Container customClass="column">
            {message && (
              <Message
                type={type}
                msg={message}
              />
            )}
            <div className={styles.containerDetalhes}>
              <h1>Projeto: {editProject.name}</h1>
              <button
                onClick={toogleProjectForm}
                className={styles.btnnewproject}
              >
                {!mostraProjeto ? "Editar seu projeto" : "Fechar"}
              </button>
              {!mostraProjeto ? (
                <div className={styles.infoProject}>
                  <p>
                    <span>Categoria: </span>
                    {editProject.category.name}
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
                  <ProjectForm
                    handleSubmit={editPost}
                    btnTest="Concluir Edição"
                    projectData={editProject}
                  />
                </div>
              )}
            </div>
            <div className={styles.serviceFomContainer}>
              <h2>Adicionar Serviço:</h2>
              <button
                onClick={toogleServiceForm}
                className={styles.btnnewproject}
              >
                {!mostrarServicoForm ? "Adicionar Serviço" : "Fechar"}
              </button>
              <div className={styles.infoProject}>
                {mostrarServicoForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    textbtn="Adicionar Serviço"
                    projectData={editProject}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass="start">
              {services && services.length > 0 ? (
                services.map((service) => (
                  <ServiceCard
                     id={service.id}
                     name={service.name}
                     valor={service.valor}
                     description={service.description}
                     key={service.id}
                     handleRemove={removeService}    //PAREI NA FUNCAO DE REMOVER SERVICO
                  />
                ))
              ) : (
                <p>Não há serviços cadastrados no sistema!</p>
              )}
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
