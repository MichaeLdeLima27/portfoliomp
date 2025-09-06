import React from 'react';
import "./Intro.css";
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Olá! Me chamo</span>
          <span>Michael De Lima</span>
          <span>🚀 Desenvolvedor Fullstack especialista em Front-end
          Crio sites modernos, rápidos e responsivos que transformam ideias em resultados.</span>
        </div>
        <button className="button i-button">contato</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">

        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <div>
          <FloatingDiv image={Crown} txt1='Desenvolvedor' txt2='Fullstack'/>
        </div>
      </div>
    </div>
  )

}

export default Intro;
