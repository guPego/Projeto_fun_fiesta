import React from "react";
import HomeCombos from "./HomeCombos/HomeCombos";
import Tutorial from "./tutorial/tutorial";
import Contato from "./Contato/Contato";
import Aluguel from "./Aluguel/Aluguel";
import Footer from "./Footer";
import Carrossel from "../../navbar/carrossel/carrossel";

export default function Home() {
  return <>
    {/* <Cabecalho /> */}
    <Carrossel />
    <HomeCombos />
    <Aluguel />
    <Tutorial />
    <Contato />
    <Footer />
  </>
}
