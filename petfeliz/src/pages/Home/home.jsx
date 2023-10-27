import Navbar from "../../components/Navbar/navbar";
import ImagemBanner from "../../images/cachorro-oculos-circulo.svg";
import "./home.css";

function Home() {
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
              Cuide de Nossos
              <br />
              Amigos
            </h1>
            <p class="cor-descricao">
              Alguem já cuidou de você,
              <br />
              por que não cuidar de um animalzinho agora?
            </p>
            <div>
              <button class="borda-semi-redonda fundo-botao btn px-3 text-white mt-sm-3 mt-md-1 shadow">
                <p>Vamos Começar</p>
              </button>
            </div>
          </div>
          <div class="col-12 col-lg-5 d-flex justify-content-end px-5 px-sm-2 h-sm-100 pt-2 pt-sm-0 mt-sm-auto mt-lg-0">
            <img
              class="dimensao-imagem mt-auto"
              src={ImagemBanner}
              alt="cachorro oculos"
            />
          </div>
        </section>
      </main>
    </body>
  );
}

export default Home;
