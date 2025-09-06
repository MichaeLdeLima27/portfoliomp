import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return(
  <div className="n-wrapper">
    <div className="n-left">
      <div className="n-name">Michael De Lima</div>
      <span>toggle</span>
    </div>
    <div className="n-right">
      <div className="n-list">
        <ul>
          <li>Inicio</li>
          <li>Serviços</li>
          <li>Experiência</li>
          <li>Portfólio</li>
          <li>Testemunhos</li>
        </ul>
      </div>
      <button className="button n-button">
        Contato
      </button>
    </div>
  </div>
  )
}

export default Navbar;
