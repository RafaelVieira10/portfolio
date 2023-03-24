import "./style.css";
import imgInicio from "../../assets/img-portfolio.png";
import cv from "../../assets/cv.pdf";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";



function Inicio() {
  return (
    <div className="containerInicio" id="inicio">
      <div className="textInicio">
        <p>Olá, sou</p>
        <p>Rafael Vieira</p>
        <p>Desenvolvedor Web</p>

        <div className="divContatos">
          <a href="https://www.linkedin.com/in/rafael-vieira-4a666b221/" alt="Linkedin" target="_blank">
          <img src={linkedin} ></img>
          </a>
          <a href="https://github.com/RafaelVieira10" alt="GitHub" target="_blank">
            <img src={github} ></img>
          </a>
          <a href="https://www.instagram.com/rafael.vieira11/" alt="Instagram" target="_blank">
            <img src={instagram} ></img>
          </a>
        </div>
        <div className="divBotao">
          <a href={cv} target="iframe_download" className="botaoCurriculo">
            Download CV
          </a>
        </div>
      </div>
      <div className="divImg">
        <img src={imgInicio} alt="" className="imgInicio"></img>
      </div>
    </div>
  );
}

export default Inicio;
