import styles from "./EditProject.module.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function EditProject() {
  const { id } = useParams() 
  const [editProject, setEditProject] = useState([]);

  useEffect(() => {
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
  }, [id]);

  return <p>{editProject.name}</p>;
}
