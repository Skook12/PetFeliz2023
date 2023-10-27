import IconePrincipal from "../../images/icone-principal.png";
function Cadastro() {
  return (
    <body class="fonte-spartan fundo-azul">
      <main>
        <section class="d-flex position-absolute top-50 start-50 translate-middle w-100 shadow">
          <div class="p-5 fundo-cor">
            <img
              src={IconePrincipal}
              class="card-img-top imagem-login"
              alt="..."
            />
            <h1>Cadastro</h1>
            <form class="row d-flex col-sm-12" id="cadastropessoa">
              <div class="m-3 col-2">
                <label for="Nome" class="form-label">
                  Nome Completo
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nome"
                  aria-label="Nome"
                />
              </div>

              <div class="m-3 col-2">
                <label for="Email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div class="m-3 col-2">
                <label for="Senha" class="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="Password"
                  placeholder="Senha"
                  aria-label="Senha"
                />
              </div>
              <div class="m-3 col-2">
                <label for="Password" class="form-label">
                  Data de nascimento
                </label>
                <input type="date" class="form-control" id="Password" />
              </div>
              <div class="m-3 col-2">
                <label for="CPF" class="form-label">
                  CPF
                </label>
                <input
                  type="CPF"
                  class="form-control"
                  id="CPF"
                  placeholder="CPF"
                  aria-label="CPF"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="m-3 col-2">
                <label for="Telefone" class="form-label">
                  Telefone
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="Telefone"
                  placeholder="Telefone"
                  aria-label="Telefone"
                />
              </div>

              <div class="m-3 col-2">
                <label for="Cidade" class="form-label">
                  Cidade
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Cidade"
                  placeholder="Cidade"
                  aria-label="Cidade"
                />
              </div>

              <div class="m-3 col-2">
                <label for="Estado" class="form-label">
                  Estado
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Estado"
                  placeholder="Estado"
                  aria-label="Estado"
                />
              </div>

              <div class="m-3 col-2">
                <label for="Bairro" class="form-label">
                  Bairro
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Bairro"
                  placeholder="Bairro"
                  aria-label="Bairro"
                />
              </div>

              <div class="m-3 col-2">
                <label for="Numero" class="form-label">
                  Número
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Numero"
                  placeholder="Numero"
                  aria-label="Numero"
                />
              </div>

              <div class="m-3 col-2">
                <label for="Rua" class="form-label">
                  Rua
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="Rua"
                  placeholder="Rua"
                  aria-label="Rua"
                />
              </div>

              <div class="col-2 mt-auto ms-sm-auto">
                <button type="submit" class="btn btn-primary">
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
