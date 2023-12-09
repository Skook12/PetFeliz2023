import IconePrincipal from "../../images/icone-principal.png";
import api from "../../Services/api";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCPF] = useState("");
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");

  function CreateUser() {
    api.post('users', {

      cpf: cpf,
      data_nasc: data,   
      email: email,
      nome: nome,
      senha: senha,
      telefone: telefone,

      cidade: cidade,
      estado: estado,
      bairro: bairro,
      numero: numero,
      rua: rua
    })
    .then(function (response) {
      console.log(response);
      navigate("/login");
    })
    .catch(function (error) {
      console.error(error);
    });
  }

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
                  onChange={(e)=>setNome(e.target.value)}
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
                  onChange={(e)=>setEmail(e.target.value)}
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
                  onChange={(e)=>setSenha(e.target.value)}
                />
              </div>
              <div className="m-3 col-2">
                <label htmlFor="Password" className="form-label">
                  Data de nascimento
                </label>
                <input type="date" className="form-control" id="Date" onChange={(e)=>setData(e.target.value)}/>
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
                  onChange={(e)=>setCPF(e.target.value)}
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
                  onChange={(e)=>setTelefone(e.target.value)}
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
                  onChange={(e)=>setCidade(e.target.value)}
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
                  onChange={(e)=>setEstado(e.target.value)}
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
                  onChange={(e)=>setBairro(e.target.value)}
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
                  onChange={(e)=>setNumero(e.target.value)}
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
                  onChange={(e)=>setRua(e.target.value)}
                />
              </div>

              <div className="col-2 mt-auto ms-sm-auto">
                <button type="button"  className="btn btn-primary" onClick={() => CreateUser()}>
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
