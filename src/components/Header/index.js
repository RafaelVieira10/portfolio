import React from "react";
import Inicio from "../Inicio";
import Sobre from "../Sobre";
import "./style.css";
import { useState } from "react";

function Header() {
  const [abrir, setAbrir] = useState("");
  const [buttoX, setButtonX] = useState("");

  function abrirMenu() {
    if (abrir == "") {
      setAbrir("active");
      setButtonX("active-button");
    } else {
      setAbrir("");
      setButtonX("");
    }
  }

  function fecharMenu() {
    if (abrir == "") {
      setAbrir("active");
    } else {
      setAbrir("");
      setButtonX("");
    }
  }

  return (
    <div className="container" id="header">
      <div className="divLogo">
        <a href="#" className="logo">
          RV
        </a>
      </div>
      <div className="listHeader">
        {/* <nav className={`navList ${abrir}`} id="navList" > */}
        <ul className={`navList ${abrir}`} id="navList">
          <li>
            <a href="#header" onClick={fecharMenu}>
              Ínicio
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={fecharMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={fecharMenu}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#habilidades" onClick={fecharMenu}>
              Habilidades
            </a>
          </li>
        </ul>
        <div className={`menu-mobile ${buttoX}`} onClick={abrirMenu}>
          <div className="linha1"></div>
          <div className="linha2"></div>
          <div className="linha3"></div>
        </div>
        {/* </nav> */}
      </div>
    </div>
  );
}

export default Header;
