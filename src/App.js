import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contato from "./Components/Pages/Contato";
import Empresa from "./Components/Pages/Empresa";
import NewProject from "./Components/Pages/NewProject";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Inicio</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/newproject">Novo Projeto</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
