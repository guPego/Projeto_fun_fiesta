import React, { useState } from "react";
import "./Hamburguer.css";

import combosFestinhas from "../../../mocks/mockHamburguer";
import ComboGold from "./Combos/ComboGold";
import ComboPlatinum from "./Combos/ComboPlatinum";
import ComboMaster from "./Combos/ComboMaster";
import Footer from "../Footer";

export default function Hamburguer() {

  const festinhas = combosFestinhas;

  return (
    <>
      <div class="card-fundo">
        <div class="card-titulo">
          <h1 class="card-titulo-um">Combos </h1>
          <h1 class="card-titulo-dois">{festinhas.titulo}</h1>
        </div>

        <div className="combo-header">
          <ComboGold />
        </div>

        <div className="combo-header">
          <ComboPlatinum />
        </div>

        <div className="combo-header">
          <ComboMaster />
        </div>
      </div>

      <Footer />
    </>
  );
}
