import ImagemPet from "../../images/zola.png";
import "./boxcriadores.css";
function BoxCriadores(props) {
  return (
    <div
      className="col-md-6 p-0 m-5 cor-vermelho-borda"
      style={{ width: "18rem" }}
    >
      <img
        src={ImagemPet}
        className="card-img-top imagem-contato rounded-circle cor-azul-borda"
        alt="..."
      />
      <div>
        <h5 className="mt-2">{props.nome}</h5>
        <p>Contato: {props.contato}</p>
      </div>
    </div>
  );
}

export default BoxCriadores;
