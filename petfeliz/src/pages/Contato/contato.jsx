import Navbar from "../../components/Navbar/navbar";
import BoxCriadores from "../../components/BoxCriadores/boxcriadores";
function Contato() {
  return (
    <body className="fundo-cor fonte-spartan p-1 p-lg-4">
      <Navbar />
      <main>
        <section className="col-12 d-lg-flex pe-lg-5 pe-sm-0 mt-5 pe-1 bordas-arrendondadas fundo-azul shadow pt-5">
          <div
            id="texto-apresentacao"
            className="col-12 col-lg-7 pt-2 p-lg-5 fonte-spartan shadow borda-semi-redonda fundo-verde ps-2 mb-lg-auto p-sm-3 me-sm-3 mb-md-4"
          >
            <h1 className="text-white">Contato</h1>
          </div>
        </section>
        <section className="container-fluid">
          <div className="row justify-content-center">
            <BoxCriadores contato={"rodrigo.franco@aln.senaicimatec.edu.br"} nome={"Rodrigo Franco"} />
            <BoxCriadores contato={"antonio.filho@aln.senaicimatec.edu.br"} nome={"Antônio César"} />
            <BoxCriadores contato={"guilherme.braga@aln.senaicimatec.edu.br"} nome={"Guilherme Lima"} />
            <BoxCriadores contato={"marcos.machado@aln.senaicimatec.edu.br"} nome={"Marcos Machado"} />
            <BoxCriadores contato={"jose.auto@aln.senaicimatec.edu.br"} nome={"Jose Auto"} />
          </div>
        </section>
      </main>
    </body>
  );
}

export default Contato;
