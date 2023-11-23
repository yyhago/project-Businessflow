// Home.js
import styles from "./Home.module.css";
import rocket from "../img/rocket.png";
import LinkButton from "../Layout/LinkButton";

export default function Home() {
  return (
    <section className={styles.homecontainer}>
      <img className={styles['rocket-image']} src={rocket} alt="Rocket" />
      <div>
        <h1 className={styles.h1Text}>
          Seja Bem-Vindo ao seu<br />
          <span className={styles.span}> BusinessFlow</span>
        </h1>
        <p className={styles.pTexto}>
          O seu melhor aliado no gerenciamento de projetos! Estamos aqui para simplificar o seu dia a dia,
          ajudando na proporção uma experiência eficiente e intuitiva, para você e suas receitas!
        </p>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </div>
    </section>
  );
}
