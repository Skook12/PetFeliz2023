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
    <body className="fundo-azul">
      <main>
        <section className="d-flex position-absolute top-50 start-50 translate-middle w-100 p-2 p-sm-0">
          <div className="col-sm-4 p-5 fundo-cor shadow">
            <img
              src={IconePrincipal}
              className="card-img-top imagem-login"
              alt="..."
            />
            <h1>Login</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="Password" />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={RedirecionarPainel}
              >
                Logar
              </button>
              <div className="mt-3">
                <a
                  type="submit"
                  className="text-dark"
                  onClick={RedirecionarCadastro}
                >
                  Cadastre-se
                </a>
              </div>
            </form>
          </div>
          <div className="col-sm-8 d-none d-sm-block">
            <img
              src={ImagemLogin}
              className="d-block w-100 fundo-login"
              alt="..."
            />
          </div>
        </section>
      </main>
    </body>
  );
}

export default Login;
