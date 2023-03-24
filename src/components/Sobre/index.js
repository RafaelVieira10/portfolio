import "./style.css";
import imgRafa from "../../assets/rafael-portfolio.png";

function Sobre() {
  return (
    <div className="containerSobre" id="sobre">
      <div className="divImage">
        <img src={imgRafa} alt=""></img>
      </div>
      <div className="divTextSobre">
        <h2>Sobre mim</h2>
        <p>Desenvolvedor Web</p>
        <br></br>
        <br></br>
        <p>Me chamo Rafael Vieira, tenho 18anos e moro em São Paulo-SP</p>
        <br></br>
        <p>
          Sou aluno na Escola SENAI Suiço-Brasileira Paulo Ernesto Tolle, onde
          estou estudando Desenvolvimento de Sistemas.
        </p>
        <br></br>
        <p>
          Busco uma vaga de experiência como desenvolvedor (estagiário ou
          júnior), para aprender e aperfeiçoar minhas competências técnicas e
          profissionais.
        </p>
      </div>
    </div>
  );
}

export default Sobre;
