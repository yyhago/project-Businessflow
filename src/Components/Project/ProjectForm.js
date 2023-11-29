import { useEffect, useState } from "react";

import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

export default function ProjectForm({ handleSubmit, btnTest, projectData }) {

  const [categoris, setCategoris] = useState([])
  const [project, setProject] = useState (projectData || [])

   useEffect(() => {
    fetch('http://localhost:5000/categoris', {      // REQUISIÇÃO DA MINHA API (CHAMADA DA MESMA)
    method:'GET',
    headers: {
      'Content-Type':'application/json'
    },
  })
  .then((resp) => resp.json())
  .then((data) => {
    setCategoris(data)
  })
  .catch((err) => console.log(err))
   }, [])


    const submit = (e) => {
      e.preventDefault()
      //console.log(project)
      handleSubmit(project)
    }

    function handleChange(e){
      setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e){
      setProject({...project, category:{
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    })
    }

  return (
    <form onSubmit={submit} className={styles.formContainer}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name: ''}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="valorTotal"
        placeholder="Insira o orçamento do projeto"
        handleOnChange={handleChange}
        value={project.valorTotal ? project.valorTotal: ''}
      />

      <Select
        name="idCategoria"
        text="Selecione a categoria"
        options={categoris}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id: ''}
      />

      <SubmitButton text={btnTest}/>
    </form>
  );
}
