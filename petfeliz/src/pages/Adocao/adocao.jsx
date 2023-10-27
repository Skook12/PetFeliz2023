import Navbar from "../../components/Navbar/navbar";
import BoxPet from "../../components/BoxPet/boxpet";
import ModalSaibaMais from "../../components/ModalSaibaMais/modalsaibamais";

function Adocao() {
  return (
    <body class="fundo-cor fonte-spartan p-1 p-lg-4">
      <Navbar />
      <main>
        <section class="col-12 d-lg-flex pe-lg-5 pe-sm-0 mt-5 pe-1 bordas-arrendondadas fundo-azul shadow pt-5">
          <div
            id="texto-apresentacao"
            class="col-12 col-lg-7 pt-2 p-lg-5 fonte-spartan shadow borda-semi-redonda fundo-verde ps-2 mb-lg-auto p-sm-3 me-sm-3 mb-md-4"
          >
            <h1 class="text-white">
              Adote um
              <br />
              Amigo
            </h1>
            <p class="cor-descricao">
              Escolha algum desses animalzinhos
              <br />
              para chamar de seu.
            </p>
            <div></div>
          </div>
        </section>

        <section class="container-fluid">
          <div class="row justify-content-center">
            <BoxPet />
          </div>
        </section>
      </main>
      <ModalSaibaMais />
    </body>
  );
}

export default Adocao;
