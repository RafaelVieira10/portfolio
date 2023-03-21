import "./style.css";
import CardProjetos from "../CardProjetos";
import { projetos } from "../ListaProjetos/listProjetos";



function Projetos() {
  return (
    <div className="contentProjetos" id="projetos">
      <div className="divTitle">
        <h2>Projetos</h2>
      </div>
        <div className="divCard">
          {projetos.projetos.map((projeto, index ) => {
            return(
              <CardProjetos key={index} projeto={projeto} className="card"/>
              );
            })}
        </div>
    </div>
  );
}

export default Projetos;
