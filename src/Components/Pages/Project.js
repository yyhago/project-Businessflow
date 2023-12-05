import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../Layout/Message";
import Container from "../Layout/Container";
import LinkButton from "../Layout/LinkButton";
import ProjectCard from "../Project/ProjectCard";
import Loading from "../Layout/Loading";

import styles from "./Project.module.css";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [removLoading, setRemovLoading] = useState(false);

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          setProjects(data);
          setRemovLoading(true);
        })
        .catch((err) => console.log(err));
    }, 500);
  }, []);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton
          to="/newproject"
          text="Criar Novo Projeto"
        />
      </div>
      {message && (
        <Message
          type="sucesso"
          msg={message}
        />
      )}
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              valorTotal={project.valorTotal}
              category={
                project.category ? project.category.name : "Sem categoria"
              }
              key={project.id}
            />
          ))}
        {!removLoading && <Loading />}
        {removLoading && projects.length === 0 && (
          <p>Não há Projetos Cadastrados no seu Sistema!</p>
        )}
      </Container>
    </div>
  );
}
