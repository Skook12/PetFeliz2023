function ModalSaibaMais(props) {
  return (
    <div
      className="modal fade"
      id={"ModalSaibaMais" + props.idx}
      tabIndex="-1"
      aria-labelledby={"ModalSaibaMais" + props.idx}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={"ModalSaibaMais" + props.idx}>
              Informações Adicionais
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={props.link_imagem}
              className="card-img-top imagem-card fundo-azul bordas-arrendondadas"
              alt="..."
            />
            <h5 className="mt-2">{props.nome}</h5>
            <p>{props.descricao}</p>
            <p>Idade: {props.idade}</p>
            <p>Raça: {props.raca}</p>
            <p>Status da Adoção: {props.status_adocao}</p>
            <p>Nome do atual Responsável: {props.dono}</p>
            <p>Telefone para contato: {props.telefone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSaibaMais;
