import "./painel.css";
import ImagemPrincipal from "../../images/icone-principal.png";
import IconePlus from "../../images/icon-plus.svg";
import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { jwtDecode } from 'jwt-decode'

function Painel() {
  const [pet, setPet] = useState();
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [raca, setRaca] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const [imagem, setImagem] = useState("https://mdbootstrap.com/img/Photos/Others/placeholder.jpg");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [decodedToken, setDecodedToken] = useState(jwtDecode(token));

  useEffect(() => {
    api
      .get("users/"+decodedToken.id+"/pets")
      .then((response) => setPet(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function CreatePet() {
    api.post('pets', {
      descricao: descricao,
      id_dono: decodedToken.id,
      idade: idade,
      link_imagem: imagem,
      nome: nome,
      raca: raca,
      status_adocao: status
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
      alert(error.response.data.error)
    });
  }

  function updatePet() {
    api.put('pets/'+ id, {
      descricao: descricao,
      id_dono: decodedToken.id,
      idade: idade,
      link_imagem: imagem,
      nome: nome,
      raca: raca,
      status_adocao: status
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  

  

  function alterarPet(aux) {
    setNome(aux.nome)
    setIdade(aux.idade)
    setDescricao(aux.descricao)
    setRaca(aux.raca)
    setStatus(aux.status_adocao)
    setImagem(aux.link_imagem)
    setId(aux.id)
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
                  src={imagem}
                  alt="example placeholder"
                  className="imagem-pet"
                />
              </div>
              <div className="d-flex justify-content-center">
                <form className="row d-flex col-sm-12" id="editarpet">
                  
                  <div className="m-sm-3 col-12 col-sm-3">
                    <label htmlFor="Nome" className="form-label">
                      Nome do Pet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome"
                      aria-label="Nome"
                      value={nome}
                      onChange={(e)=>setNome(e.target.value)}
                    />
                  </div>

                  <div className="m-sm-3 col-12 col-sm-3">
                    <label htmlFor="Nome" className="form-label">
                      Link Imagem
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Imagem"
                      aria-label="Imagem"
                      value={imagem}
                      onChange={(e)=>setImagem(e.target.value)}
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
                      value={idade}
                      onChange={(e)=>setIdade(e.target.value)}
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
                      value={descricao}
                      onChange={(e)=>setDescricao(e.target.value)}
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
                      value={raca}
                      onChange={(e)=>setRaca(e.target.value)}
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
                      value={status}
                      onChange={(e)=>setStatus(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 col-8 col-sm-12">
                    <button type="submmit" className="btn btn-primary" onClick={() => updatePet()}>
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
                    src={imagem}
                    alt="imagem form"
                    className="imagem-pet"
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <form className="row d-flex col-sm-12" id="cadastropet">
                    

                    <div className="m-1 m-sm-3 col-12 col-sm-3">
                      <label htmlFor="Nome" className="form-label">
                        Nome
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        aria-label="Nome"
                        onChange={(e)=>setNome(e.target.value)}
                      />
                    </div>

                    <div className="m-1 m-sm-3 col-12 col-sm-3">
                      <label htmlFor="Nome" className="form-label">
                        Link da Imagem
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        aria-label="Nome"
                        onChange={(e)=>setImagem(e.target.value)}
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
                        onChange={(e)=>setIdade(e.target.value)}
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
                        onChange={(e)=>setDescricao(e.target.value)}
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
                        onChange={(e)=>setRaca(e.target.value)}
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
                        placeholder="Status"
                        aria-label="Status"
                        onChange={(e)=>setStatus(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submmit" className="btn btn-primary" onClick={() => CreatePet()}>
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
