import React, { useState } from "react";
import "./Pizza.css";

import combosFestinhas from "../../../mocks/mockPizza";
import ComboGold from "./Combos/ComboGold";
import ComboPlatinum from "./Combos/ComboPlatinum";
import ComboMaster from "./Combos/ComboMaster";
import Footer from "../Footer";

export default function Pizza() {

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
