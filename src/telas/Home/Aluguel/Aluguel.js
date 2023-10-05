import "./Aluguel.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
//Extras
import gelo from "../../../assets/Aluguel/gelo.png";
import carvao from "../../../assets/Aluguel/carvao.png";
import temperos from "../../../assets/Aluguel/temperos.png";
import balao from "../../../assets/Aluguel/baloes.png";
import vela from "../../../assets/Aluguel/velas.png";
//Alugueis
import caixa from "../../../assets/Aluguel/caixaTerm.png";
import cama from "../../../assets/Aluguel/camaElast.png";
import cadeira from "../../../assets/Aluguel/mesaCadeira.png";
import pratos from "../../../assets/Aluguel/pratCol.png";
import mesa2 from "../../../assets/Aluguel/mesasBolo.png";


export default function Aluguel() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <div className="suprema-diogo">
      <div  className="pai-diogo">
        <h1 className="extra-diogo">Extras<div className="borda-diogo"></div></h1>
      <ul ref={ref} className="ul-diogo">
        <li className="digo-diogo-extras">
          <img src={gelo} className="fotos-diogo"></img>
          <div className="diogo-card-extras">
            <p className="escrita-alugueis-diogo">Gelo</p><p className="escrita-alugueis-diogo">R$ 30,00</p>
            <p className="botao-diogo-alugueis">Adicionar</p>
          </div>
        </li>
        <li className="digo-diogo-extras">
          <img src={carvao} className="fotos-diogo">
          </img>
          <div className="diogo-card-extras">
            <p className="escrita-alugueis-diogo">Carvão</p><p className="escrita-alugueis-diogo">R$ 5,00</p>
            <p className="botao-diogo-alugueis">Adicionar</p>
          </div>
        </li>
        <li className="digo-diogo-extras">
          <img src={temperos} className="fotos-diogo">
          </img>
          <div className="diogo-card-extras">
            <p className="escrita-alugueis-diogo">Temperos</p><p className="escrita-alugueis-diogo">R$ 5,00 un</p>
            <p className="botao-diogo-alugueis">Adicionar</p>
            </div>
          </li>
        <li className="digo-diogo-extras">
          <img src={balao} className="fotos-diogo"></img>
          <div className="diogo-card-extras">
            <p className="escrita-alugueis-diogo">Balões</p><p className="escrita-alugueis-diogo">R$ 30,00 un</p>
            <p className="botao-diogo-alugueis">Adicionar</p>
          </div>
        </li>
        <li className="digo-diogo-extras">
          <img src={vela} className="fotos-diogo"></img>
          <div className="diogo-card-extras">
            <p className="escrita-alugueis-diogo">Velas</p><p className="escrita-alugueis-diogo">R$ 20,00 </p>
            <p className="botao-diogo-alugueis">Adicionar</p>
          </div>
        </li>
      </ul>
      </div>
       <div  className="pai-diogo">
        <h1 className="extra-diogo">Alugueis <div className="borda-diogo"></div></h1>
      <ul ref={ref} className="ul-diogo">
        <li className="digo-diogo-alugueis">
          <img src={caixa} className="fotos-diogo"></img>
          <div className="diogo-card-alugueis">
            <p className="escrita-alugueis-diogo">Caixa Termica</p>
            <p className="botao-diogo-alugueis">Contato</p>
          </div>
        </li>
        <li className="digo-diogo-alugueis">
          <img src={cama} className="fotos-diogo"></img>
          <div className="diogo-card-alugueis">
            <p className="escrita-alugueis-diogo">Cama Elastica</p>
            <p className="botao-diogo-alugueis">Contato</p>
          </div>
        </li>
        <li className="digo-diogo-alugueis">
          <img src={cadeira} className="fotos-diogo"></img>
          <div className="diogo-card-alugueis">
            <p className="escrita-alugueis-diogo">Mesas/Cadeidas</p>
            <p className="botao-diogo-alugueis">Contato</p>
            </div>
          </li>
        <li className="digo-diogo-alugueis">
          <img src={pratos} className="fotos-diogo"></img>
          <div className="diogo-card-alugueis">
            <p className="escrita-alugueis-diogo">Pratos/Colheres</p>
            <p className="botao-diogo-alugueis">Contato</p>
          </div>
        </li>
        <li className="digo-diogo-alugueis">
          <img src={mesa2} className="fotos-diogo"></img>
          <div className="diogo-card-alugueis">
            <p className="escrita-alugueis-diogo">Mesas de Bolos</p>
            <p className="botao-diogo-alugueis">Contato</p>
          </div>
        </li>
      </ul>
      </div>
    </div>
      </>
  );
}