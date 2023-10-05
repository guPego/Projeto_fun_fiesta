import { React } from "react";
import './manutencao.css'

import manutencaoGif from "./assets/cooking.gif";
import manutencaoLogo from "./assets/logo/logo6.0FunFiesta.png"

export default function Manutencao() {

  return (
    <div className="background">
      <div className="manutencao-container">
        <div className="manutencao-container-logo">
          <spam className="manutencao-text-logo">Fun Fiesta<img className="manutencao-logo" src={manutencaoLogo}/></spam>
        </div>
        <img className="manutencao-image" src={manutencaoGif} />
        <spam className="manutencao-text">Desculpe-nos pela inconveniência, estamos em manutenção. Estaremos de volta em breve!</spam>
      </div>
    </div>
  )
}