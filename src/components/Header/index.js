import React from "react";
import Inicio from "../Inicio";
import Sobre from "../Sobre";
import './style.css'


function Header() {
  return (
    <div className="container" id="header">
      <div className="divLogo">
        <a href="#" className="logo">
            RV
        </a>
      </div>
      <div className="listHeader">
        <nav className="navList">
            <ul>
              <li>
                <a href="#header">Início</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
            </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
