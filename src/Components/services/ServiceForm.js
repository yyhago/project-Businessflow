import style from "./ServiceForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

import { useState } from "react";

export default function ServiceForm({ handleSubmit, textbtn, projectData }) {
  const [service, setService] = useState([]);

  function submit(e) {
    e.preventDefault();
  
    if (!projectData.services || !Array.isArray(projectData.services)) {
      projectData.services = [];
    }
  
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={submit}
      className={style.form}
    >
      <Input
        type="text"
        text="Nome do Serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do Serviço"
        name="valor"
        placeholder="Insira o valor do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do Serviço"
        name="description"
        placeholder="Descrição do serviço"
        handleOnChange={handleChange}
      />
      <SubmitButton text={textbtn} />
    </form>
  );
}
