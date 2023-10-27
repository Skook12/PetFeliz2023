import ImagemPet from "../../images/zola.png";
import "./boxpet.css";

function BoxPet() {
  return (
    <div class="col-md-4 p-0 m-5 cor-vermelho-borda" style={{ width: "18rem" }}>
      <img
        src={ImagemPet}
        class="card-img-top imagem-card bordas-arrendondadas cor-azul-borda"
        alt="..."
      />
      <div>
        <h5 class="mt-2">Zola</h5>
        <p>Cuidado suas havaianas ficarão em perigo</p>
        <a
          href="#"
          class="btn fundo-botao"
          data-bs-toggle="modal"
          data-bs-target="#ModalSaibaMais"
        >
          Conheça mais
        </a>
      </div>
    </div>
  );
}

export default BoxPet;
