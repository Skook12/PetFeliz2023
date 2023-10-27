import ImagemLogin from "../../images/fundoLogin.jpg";
import IconePrincipal from "../../images/icone-principal.png";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  function RedirecionarCadastro() {
    navigate("/cadastro");
  }

  function RedirecionarPainel() {
    navigate("/painel");
  }

  return (
    <body class="fundo-azul">
      <main>
        <section class="d-flex position-absolute top-50 start-50 translate-middle w-100 p-2 p-sm-0">
          <div class="col-sm-4 p-5 fundo-cor shadow">
            <img
              src={IconePrincipal}
              class="card-img-top imagem-login"
              alt="..."
            />
            <h1>Login</h1>
            <form>
              <div class="mb-3">
                <label for="Email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="Password" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="Password" />
              </div>

              <button
                type="submit"
                class="btn btn-primary"
                onClick={RedirecionarPainel}
              >
                Logar
              </button>
              <div class="mt-3">
                <a
                  type="submit"
                  class="text-dark"
                  onClick={RedirecionarCadastro}
                >
                  Cadastre-se
                </a>
              </div>
            </form>
          </div>
          <div class="col-sm-8 d-none d-sm-block">
            <img
              src={ImagemLogin}
              class="d-block w-100 fundo-login"
              alt="..."
            />
          </div>
        </section>
      </main>
    </body>
  );
}

export default Login;
