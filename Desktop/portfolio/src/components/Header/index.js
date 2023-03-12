import React from "react";
import './style.css'


function Header() {
  return (
    <div className="container">
      <div className="divLogo">
        <a href="#" className="logo">
            RV
        </a>
      </div>
      <div className="listHeader">
        <nav className="navList">
            <a href="#">Ínicio</a>
            <a href="#">Sobre</a>
            <a href="#">Projetos</a>
            <a href="#">Habilidades</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
