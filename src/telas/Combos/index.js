import React from "react";
import "./todoCombo.css";

import combosTodos from "../../mocks/combosTodos";

import Footer from "./Footer";

export default function Combos() {
  return (
    <>
      <div className="todoCombo-titulo">
        <p className="todoCombo-txtTitulo">{combosTodos.tituloPrincipal}</p>
      </div>
      <div className="todoCombo-corpo">

        {combosTodos.itens.map((item) => {
          return (  
            <>
              <div className="todoCombo-card">
               <a href={"/combos" + (item.href)}>
                  <div className="todoCombo-imgCardV">
                    <img src={item.image} className="todoCombo-imgCard" />
                  </div>
                  <div className="todoCombo-txtCardV">
                    <p className="todoCombo-txtCard">{item.titulo}</p>
                  </div>
                </a>
              </div>
            </>
          )
        })}

      </div>

      <Footer />

    </>
  );
}
