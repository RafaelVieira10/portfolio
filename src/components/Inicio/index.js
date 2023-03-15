import "./style.css";
import imgInicio from "../../assets/img-portfolio.png";
import cv from "../../assets/cv.pdf";
import github from "../../assets/github.png";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import arrow from "../../assets/arrow.png";



function Inicio() {
  return (
    <div className="containerInicio" id="inicio">
      <div className="textInicio">
        <p>Olá, sou</p>
        <p>Rafael Vieira</p>
        <p>Desenvolvedor Web</p>

        <div className="divContatos">
          <a href="https://www.linkedin.com/feed/" target="_blank">
          <img src={linkedin} ></img>
          </a>
          <a href="https://github.com/RafaelVieira10" target="_blank">
            <img src={github} ></img>
          </a>
          <a href="rafael.rvs23@gmail.com" target="_blank">
            <img src={gmail} ></img>
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

      <div className="backTop">
        <a href="#header">
          <img src={arrow}></img>
        </a> 
      </div>
    </div>
  );
}

export default Inicio;
