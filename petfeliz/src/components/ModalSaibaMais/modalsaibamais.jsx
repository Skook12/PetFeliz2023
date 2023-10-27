import ImagemPet from "../../images/zola.png";

function ModalSaibaMais() {
  return (
    <div
      class="modal fade"
      id="ModalSaibaMais"
      tabindex="-1"
      aria-labelledby="ModalSaibaMais"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="ModalSaibaMais">
              Informações Adicionais
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img
              src={ImagemPet}
              class="card-img-top imagem-card fundo-azul bordas-arrendondadas"
              alt="..."
            />
            <h5 class="mt-2">Zola</h5>
            <p>Cuidado suas havaianas ficarão em perigo</p>
            <p>Idade: 5 anos</p>
            <p>Raça: Dinossauro</p>
            <p>Status da Adoção: Adotada</p>
            <p>Nome do atual Responsável: Zinhoinho</p>
            <p>Telefone para contato: 4002-8922</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSaibaMais;
