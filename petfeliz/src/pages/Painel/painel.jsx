import "./painel.css";
import ImagemPrincipal from "../../images/icone-principal.png";
import IconePlus from "../../images/icon-plus.svg";
function Painel() {
  return (
    <body class="fonte-spartan fundo-azul">
      <main>
        <section class="d-flex w-100">
          <div class="col-12 fundo-cor shadow vh-100 d-flex">
            <div class="col-3 fundo-azul h-100 p-3 justify-content-center">
              <img
                class="icone-painel-pets d-block me-2"
                src={IconePlus}
                alt="pet feliz"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
              <div class="d-flex justify-content-center align-middle borda-inferior">
                <img
                  class="icone-painel-pets d-block me-2"
                  src={ImagemPrincipal}
                  alt="pet feliz"
                />
                <h4>Zola</h4>
              </div>
            </div>
            <div class="col-9 p-1 p-sm-3 p-lg-5">
              <div class="mb-4 d-flex justify-content-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                  alt="example placeholder"
                  class="imagem-pet"
                />
              </div>
              <div class="d-flex justify-content-center">
                <form class="row d-flex col-sm-12" id="editarpet">
                  <div class="d-flex justify-content-center">
                    <div class="btn btn-primary btn-rounded col-8 col-sm-12">
                      <label class="form-label text-white" for="customFile1">
                        Escolha uma Imagem
                      </label>
                      <input
                        type="file"
                        class="form-control d-none"
                        id="customFile1"
                      />
                    </div>
                  </div>
                  <div class="m-sm-3 col-12 col-sm-3">
                    <label for="Nome" class="form-label">
                      Nome do Pet
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nome"
                      aria-label="Nome"
                    />
                  </div>

                  <div class="m-sm-3 col-12 col-sm-3">
                    <label for="Idade" class="form-label">
                      Idade
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Idade"
                      placeholder="Idade do Pet"
                      aria-label="Idade do Pet"
                    />
                  </div>
                  <div class="m-sm-3 col-12 col-sm-3">
                    <label for="Descricao" class="form-label">
                      Descrição
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Descricao"
                      placeholder="Descricao"
                      aria-label="Descricao"
                    />
                  </div>
                  <div class="m-sm-3 col-12 col-sm-3">
                    <label for="Raca" class="form-label">
                      Raça
                    </label>
                    <input
                      type="Raca"
                      class="form-control"
                      id="Raca"
                      placeholder="Raca"
                      aria-label="Raca"
                    />
                  </div>
                  <div class="m-sm-3 col-12 col-sm-3">
                    <label for="Status" class="form-label">
                      Status Adoção
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="Status"
                      placeholder="Status"
                      aria-label="Status"
                    />
                  </div>
                  <div class="mt-2 col-8 col-sm-12">
                    <button type="button" class="btn btn-primary">
                      Salvar Pet
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Adicionar Pet
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <div class="mb-4 d-flex justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                    alt="example placeholder"
                    class="imagem-pet"
                  />
                </div>
                <div class="d-flex justify-content-center">
                  <form class="row d-flex col-sm-12" id="cadastropet">
                    <div class="btn btn-primary btn-rounded">
                      <label
                        class="form-label text-white m-1"
                        for="customFile1"
                      >
                        Escolha uma Imagem
                      </label>
                      <input
                        type="file"
                        class="form-control d-none"
                        id="customFile1"
                      />
                    </div>

                    <div class="m-1 m-sm-3 col-12 col-sm-3">
                      <label for="Nome" class="form-label">
                        Nome do Pet
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nome"
                        aria-label="Nome"
                      />
                    </div>

                    <div class="m-1 m-sm-3 col-12 col-sm-3">
                      <label for="Idade" class="form-label">
                        Idade
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Idade"
                        placeholder="Idade do Pet"
                        aria-label="Idade do Pet"
                      />
                    </div>
                    <div class="m-1 m-sm-3 col-12 col-sm-3">
                      <label for="Descricao" class="form-label">
                        Descrição
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="Descricao"
                        placeholder="Descricao"
                        aria-label="Descricao"
                      />
                    </div>
                    <div class="m-1 m-sm-3 col-12 col-sm-3">
                      <label for="Raca" class="form-label">
                        Raça
                      </label>
                      <input
                        type="Raca"
                        class="form-control"
                        id="Raca"
                        placeholder="Raca"
                        aria-label="Raca"
                      />
                    </div>
                    <div class="m-1 m-sm-3 col-12 col-sm-3">
                      <label for="Status" class="form-label">
                        Status Adoção
                      </label>
                      <input
                        type="tel"
                        class="form-control"
                        id="Telefone"
                        placeholder="Telefone"
                        aria-label="Telefone"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Salvar Pet
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Painel;
