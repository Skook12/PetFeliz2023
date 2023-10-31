import Navbar from "../../components/Navbar/navbar";
import BoxPet from "../../components/BoxPet/boxpet";
import ModalSaibaMais from "../../components/ModalSaibaMais/modalsaibamais";
import React, { useEffect, useState } from "react";
import api from "../../Services/api";

function Adocao() {
  const [pet, setPet] = useState();

  useEffect(() => {
    api
      .get("pets")
      .then((response) => setPet(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <body className="fundo-cor fonte-spartan p-1 p-lg-4">
      <Navbar />
      <main>
        <section className="col-12 d-lg-flex pe-lg-5 pe-sm-0 mt-5 pe-1 bordas-arrendondadas fundo-azul shadow pt-5">
          <div
            id="texto-apresentacao"
            className="col-12 col-lg-7 pt-2 p-lg-5 fonte-spartan shadow borda-semi-redonda fundo-verde ps-2 mb-lg-auto p-sm-3 me-sm-3 mb-md-4"
          >
            <h1 className="text-white">
              Adote um
              <br />
              Amigo
            </h1>
            <p className="cor-descricao">
              Escolha algum desses animalzinhos
              <br />
              para chamar de seu.
            </p>
            <div></div>
          </div>
        </section>

        <section className="container-fluid">
          <div className="row justify-content-center">
            {pet?.map((u, index) => (
              <>
                <BoxPet
                  key={index + "key"}
                  status_adocao={u.status_adocao}
                  idade={u.idade}
                  raca={u.raca}
                  link_imagem={u.link_imagem}
                  descricao={u.descricao}
                  nome={u.nome}
                  idx={index}
                />
                <ModalSaibaMais
                  key={index + "key2"}
                  status_adocao={u.status_adocao}
                  idade={u.idade}
                  raca={u.raca}
                  link_imagem={u.link_imagem}
                  descricao={u.descricao}
                  nome={u.nome}
                  dono={u.id_dono}
                  idx={index}
                />
              </>
            ))}
          </div>
        </section>
      </main>
    </body>
  );
}

export default Adocao;
