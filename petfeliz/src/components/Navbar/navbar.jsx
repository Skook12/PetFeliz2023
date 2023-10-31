import Icone from "../../images/icone-principal.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function RedirecionarHome() {
    navigate("/");
  }

  function RedirecionarAdocao() {
    navigate("/adocao");
  }

  function RedirecionarSobre() {
    navigate("/sobre");
  }

  function RedirecionarContato() {
    navigate("/contato");
  }

  function RedirecionarLogin() {
    navigate("/login");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-static-top px-4 pt-4">
      <div className="container-fluid">
        <div className="align-middle">
          <img className="icone-principal" src={Icone} alt="pet feliz" />
          <a
            className="ms-2 navbar-brand cor-titulo"
            onClick={RedirecionarHome}
          >
            pet feliz
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex justify-content-around col-lg-4 col-md-12 col-sm-12">
            <li className="nav-item">
              <a className="nav-link" onClick={RedirecionarAdocao}>
                Adoção
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={RedirecionarSobre}>
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={RedirecionarContato}>
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={RedirecionarLogin}>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
