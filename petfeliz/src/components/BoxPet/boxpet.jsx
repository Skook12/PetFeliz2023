import "./boxpet.css";

function BoxPet(props) {
  return (
    <div
      className="col-md-4 p-0 m-5 cor-vermelho-borda"
      style={{ width: "18rem" }}
    >
      <img
        src={props.link_imagem}
        className="card-img-top imagem-card bordas-arrendondadas cor-azul-borda"
        alt="..."
      />
      <div>
        <h5 className="mt-2">{props.nome}</h5>
        <p>{props.descricao}</p>
        <a
          href="#"
          className="btn fundo-botao"
          data-bs-toggle="modal"
          data-bs-target={"#ModalSaibaMais" + props.idx}
        >
          Conheça mais
        </a>
      </div>
    </div>
  );
}

export default BoxPet;
