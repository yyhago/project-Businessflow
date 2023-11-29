import { useEffect, useState } from "react";

import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

export default function ProjectForm({btnTest}) {

  const [categoris, setCategoris] = useState([])

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


  return (
    <form className={styles.formContainer}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="valorTotal"
        placeholder="Insira o orçamento do projeto"
      />

      <Select
        name="idCategoria"
        text="Selecione a categoria"
        options={categoris}
      />

      <SubmitButton text={btnTest}/>
    </form>
  );
}
