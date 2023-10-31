import IconePrincipal from "../../images/icone-principal.png";
function Cadastro() {
  return (
    <body className="fonte-spartan fundo-azul">
      <main>
        <section className="d-flex position-absolute top-50 start-50 translate-middle w-100 shadow">
          <div className="p-5 fundo-cor">
            <img
              src={IconePrincipal}
              className="card-img-top imagem-login"
              alt="..."
            />
            <h1>Cadastro</h1>
            <form className="row d-flex col-sm-12" id="cadastropessoa">
              <div className="m-3 col-2">
                <label htmlFor="Nome" className="form-label">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome"
                  aria-label="Nome"
                />
              </div>

              <div className="m-3 col-2">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div className="m-3 col-2">
                <label htmlFor="Senha" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Senha"
                  aria-label="Senha"
                />
              </div>
              <div className="m-3 col-2">
                <label htmlFor="Password" className="form-label">
                  Data de nascimento
                </label>
                <input type="date" className="form-control" id="Date" />
              </div>
              <div className="m-3 col-2">
                <label htmlFor="CPF" className="form-label">
                  CPF
                </label>
                <input
                  type="CPF"
                  className="form-control"
                  id="CPF"
                  placeholder="CPF"
                  aria-label="CPF"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="m-3 col-2">
                <label htmlFor="Telefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="Telefone"
                  placeholder="Telefone"
                  aria-label="Telefone"
                />
              </div>

              <div className="m-3 col-2">
                <label htmlFor="Cidade" className="form-label">
                  Cidade
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Cidade"
                  placeholder="Cidade"
                  aria-label="Cidade"
                />
              </div>

              <div className="m-3 col-2">
                <label htmlFor="Estado" className="form-label">
                  Estado
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Estado"
                  placeholder="Estado"
                  aria-label="Estado"
                />
              </div>

              <div className="m-3 col-2">
                <label htmlFor="Bairro" className="form-label">
                  Bairro
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Bairro"
                  placeholder="Bairro"
                  aria-label="Bairro"
                />
              </div>

              <div className="m-3 col-2">
                <label htmlFor="Numero" className="form-label">
                  Número
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Numero"
                  placeholder="Numero"
                  aria-label="Numero"
                />
              </div>

              <div className="m-3 col-2">
                <label htmlFor="Rua" className="form-label">
                  Rua
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="Rua"
                  placeholder="Rua"
                  aria-label="Rua"
                />
              </div>

              <div className="col-2 mt-auto ms-sm-auto">
                <button type="submit" className="btn btn-primary">
                  Cadastrar
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </body>
  );
}

export default Cadastro;
