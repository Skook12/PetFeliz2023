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
    <nav class="navbar navbar-expand-lg navbar-static-top px-4 pt-4">
      <div class="container-fluid">
        <div class="align-middle">
          <img class="icone-principal" src={Icone} alt="pet feliz" />
          <a class="ms-2 navbar-brand cor-titulo" onClick={RedirecionarHome}>
            pet feliz
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul class="navbar-nav d-flex justify-content-around col-lg-4 col-md-12 col-sm-12">
            <li class="nav-item">
              <a class="nav-link" onClick={RedirecionarAdocao}>
                Adoção
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={RedirecionarSobre}>
                Sobre
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={RedirecionarContato}>
                Contato
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={RedirecionarLogin}>
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
