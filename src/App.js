import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Pages/Home";
import Contato from "./Components/Pages/Contato";
import Empresa from "./Components/Pages/Empresa";
import NewProject from "./Components/Pages/NewProject";
import Container from "./Components/Layout/Container";
import NavBar from "./Components/Layout/NavBar";
import Project from "./Components/Pages/Project";
import Footer from "./Components/Layout/Footer";
import styles from "./Components/Layout/Container.module.css";
import EditProject from "./Components/Pages/EditProject";

function App() {
  return (
    <Router>
      <div className={styles["app-container"]}>
        <NavBar />

        <Container customClass="min-height">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route
              path="/contato"
              element={<Contato />}
            />
            <Route
              path="/empresa"
              element={<Empresa />}
            />
            <Route
              path="/newproject"
              element={<NewProject />}
            />
            <Route
              path="/project"
              element={<Project />}
            />
            <Route
              path="/editproject/:id"
              element={<EditProject />}
            />
          </Routes>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
