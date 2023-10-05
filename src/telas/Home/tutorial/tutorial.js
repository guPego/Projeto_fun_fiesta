import React from "react";
import "./tutorial.css";
import {BsFill1CircleFill,BsFill2CircleFill, BsFill3CircleFill} from "react-icons/bs";

export default function Tutorial() {
  return (
    <div class="fundoTutorial">
      <h1 className="tutorial-leticia-muito">Muito Rapido<div className="borda-tutorial-leticia"></div></h1>
      <div class="bordaTutorial">
        <div class="divTutorial">
          <div class="posicaoNumeroTutorial">
            <BsFill1CircleFill size={40} className="tutorial-leticia-num"/>
          </div>
          <div>
            <h4 class="tituloTutorial">Cadastre-se</h4>
            <p class="subtituloTutorial">Faça seu cadastro gratuitamente</p>
          </div>
        </div>
        <div class="divTutorial">
          <div class="posicaoNumeroTutorial">
            <BsFill2CircleFill size={40} className="tutorial-leticia-num"/>
          </div>
          <div>
            <h4 class="tituloTutorial">Faça seu pedido</h4>
            <p class="subtituloTutorial">Escolha entre as opções</p>
          </div>
        </div>
        <div class="divTutorial">
          <div class="posicaoNumeroTutorial">
          <BsFill3CircleFill size={40} className="tutorial-leticia-num"/>
          </div>
          <div>
            <h4 class="tituloTutorial">Espere pela festa</h4>
            <p class="subtituloTutorial">E divirta-se</p>
          </div>
        </div>
        <div className="botao-cadastroTutorial">
          <a href="/cadastro" class="cadastroTutorial"> Quero me cadastrar!</a>
        </div>
      </div>
    </div>
  );
}
