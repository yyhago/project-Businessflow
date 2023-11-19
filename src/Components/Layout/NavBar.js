import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./NavBar.module.css";
import logo from "../img/start-up.png";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Link to="/">
          <img
            src={logo}
            alt="BusinessFlow"
          />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Inicio</Link>
          </li>
          <li className={styles.item}>
            <Link to="/project">Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Navbar;
