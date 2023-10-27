import Navbar from "../../components/Navbar/navbar";
function Sobre() {
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
              Um pouco sobre
              <br />
              Petfeliz
            </h1>
          </div>
          <div class="col-12 col-lg-5 d-flex justify-content-end px-5 px-sm-2 h-sm-100 pt-2 pt-sm-0 mt-sm-auto mt-lg-0">
            <p class="cor-descricao">
              PetFeliz: o site que conecta pets com seus novos donos
              <br />
              <br />O PetFeliz é um site de adoção de pets que tem como objetivo
              conectar animais abandonados com pessoas que desejam ter um
              companheiro em casa. Somos uma equipe de apaixonados por animais e
              acreditamos que todos merecem um lar feliz. <br />
              <br />
              No PetFeliz, você encontra uma variedade de pets para adoção, de
              cães e gatos a aves, peixes e roedores. <br />
              <br />
              Todos os animais são resgatados de maus-tratos ou abandono e
              passam por um processo de avaliação e cuidados antes de serem
              disponibilizados para adoção. A adoção de um pet é uma decisão
              importante e deve ser tomada com responsabilidade.
              <br />
              <br />
              No PetFeliz, nós nos comprometemos a ajudar você a encontrar o pet
              perfeito para sua você.
            </p>
          </div>
        </section>
      </main>
    </body>
  );
}

export default Sobre;
