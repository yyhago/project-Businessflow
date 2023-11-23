import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

export default function ProjectForm({btnTest}) {
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
      />

      <SubmitButton text={btnTest}/>
    </form>
  );
}
