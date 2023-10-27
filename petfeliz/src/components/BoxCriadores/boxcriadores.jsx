import ImagemPet from "../../images/zola.png";
import "./boxcriadores.css";
function BoxCriadores() {
  return (
    <div class="col-md-6 p-0 m-5 cor-vermelho-borda" style={{ width: "18rem" }}>
      <img
        src={ImagemPet}
        class="card-img-top imagem-contato rounded-circle cor-azul-borda"
        alt="..."
      />
      <div>
        <h5 class="mt-2">Rodrigo Franco</h5>
        <p>Contato: rodrigo.franco@aln.senaicimatec.edu.br</p>
      </div>
    </div>
  );
}

export default BoxCriadores;
