import "./painel.css";
import ImagemPrincipal from "../../images/icone-principal.png";
import IconePlus from "../../images/icon-plus.svg";
import React, { useEffect, useState } from "react";
import api from "../../Services/api";

function Painel() {
  const [pet, setPet] = useState();
  const [formpet, setFormPet] = useState({
    nome: "nome",
    idade: "idade",
    descricao: "descrição",
    raca: "raça",
    status: "status",
    imagem: "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg",
  });

  useEffect(() => {
    api
      .get("pets")
      .then((response) => setPet(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function alterarPet(aux) {
    setFormPet({
      nome: aux.nome,
      idade: aux.idade,
      descricao: aux.descricao,
      raca: aux.raca,
      status: aux.status_adocao,
      imagem: aux.link_imagem,
    });
  }

  return (
    <body className="fonte-spartan fundo-azul">
      <main>
        <section className="d-flex w-100">
          <div className="col-12 fundo-cor shadow vh-100 d-flex">
            <div className="col-3 fundo-azul h-100 p-3 justify-content-center">
              <img
                className="icone-painel-pets d-block me-2"
                src={IconePlus}
                alt="pet feliz"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />

              {pet?.map((u, index) => (
                <>
                  <div
                    key={index}
                    className="d-flex justify-content-center align-middle borda-inferior pt-3"
                    onClick={() => alterarPet(u)}
                  >
                    <img
                      key={index + "key"}
                      className="icone-painel-pets d-block me-2"
                      src={ImagemPrincipal}
                      alt="pet feliz"
                    />
                    <h4 key={index + "key2"}>{u.nome}</h4>
                  </div>
                </>
              ))}
            </div>
            <div className="col-9 p-1 p-sm-3 p-lg-5">
              <div className="mb-4 d-flex justify-content-center">
                <img
                  src={formpet.imagem}
                  alt="example placeholder"
                  className="imagem-pet"
                />
              </div>
              <div className="d-flex justify-content-center">
                <form className="row d-flex col-sm-12" id="editarpet">
                  <div className="d-flex justify-content-center">
                    <div className="btn btn-primary btn-rounded col-8 col-sm-12">
                      <label
                        className="form-label text-white"
                        htmlFor="customFile1"
                      >
                        Escolha uma Imagem
                      </label>
                      <input
                        type="file"
                        className="form-control d-none"
                        id="customFile1"
                      />
                    </div>
                  </div>
                  <div className="m-sm-3 col-12 col-sm-3">
                    <label htmlFor="Nome" className="form-label">
                      Nome do Pet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome"
                      aria-label="Nome"
                      value={formpet.nome}
                    />
                  </div>

                  <div className="m-sm-3 col-12 col-sm-3">
                    <label htmlFor="Idade" className="form-label">
                      Idade
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Idade"
                      placeholder="Idade do Pet"
                      aria-label="Idade do Pet"
                      value={formpet.idade}
                    />
                  </div>
                  <div className="m-sm-3 col-12 col-sm-3">
                    <label htmlFor="Descricao" className="form-label">
                      Descrição
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Descricao"
                      placeholder="Descricao"
                      aria-label="Descricao"
                      value={formpet.descricao}
                    />
                  </div>
                  <div className="m-sm-3 col-12 col-sm-3">
                    <label htmlFor="Raca" className="form-label">
                      Raça
                    </label>
                    <input
                      type="Raca"
                      className="form-control"
                      id="Raca"
                      placeholder="Raca"
                      aria-label="Raca"
                      value={formpet.raca}
                    />
                  </div>
                  <div className="m-sm-3 col-12 col-sm-3">
                    <label htmlFor="Status" className="form-label">
                      Status Adoção
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Status"
                      placeholder="Status"
                      aria-label="Status"
                      value={formpet.status}
                    />
                  </div>
                  <div className="mt-2 col-8 col-sm-12">
                    <button type="button" className="btn btn-primary">
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
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Adicionar Pet
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="mb-4 d-flex justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                    alt="example placeholder"
                    className="imagem-pet"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <form className="row d-flex col-sm-12" id="cadastropet">
                    <div className="btn btn-primary btn-rounded">
                      <label
                        className="form-label text-white m-1"
                        htmlFor="customFile1"
                      >
                        Escolha uma Imagem
                      </label>
                      <input
                        type="file"
                        className="form-control d-none"
                        id="customFile1"
                      />
                    </div>

                    <div className="m-1 m-sm-3 col-12 col-sm-3">
                      <label htmlFor="Nome" className="form-label">
                        Nome do Pet
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        aria-label="Nome"
                      />
                    </div>

                    <div className="m-1 m-sm-3 col-12 col-sm-3">
                      <label htmlFor="Idade" className="form-label">
                        Idade
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Idade"
                        placeholder="Idade do Pet"
                        aria-label="Idade do Pet"
                      />
                    </div>
                    <div className="m-1 m-sm-3 col-12 col-sm-3">
                      <label htmlFor="Descricao" className="form-label">
                        Descrição
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Descricao"
                        placeholder="Descricao"
                        aria-label="Descricao"
                      />
                    </div>
                    <div className="m-1 m-sm-3 col-12 col-sm-3">
                      <label htmlFor="Raca" className="form-label">
                        Raça
                      </label>
                      <input
                        type="Raca"
                        className="form-control"
                        id="Raca"
                        placeholder="Raca"
                        aria-label="Raca"
                      />
                    </div>
                    <div className="m-1 m-sm-3 col-12 col-sm-3">
                      <label htmlFor="Status" className="form-label">
                        Status Adoção
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="Telefone"
                        placeholder="Telefone"
                        aria-label="Telefone"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
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
