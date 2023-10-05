import React, { useEffect, useState } from "react";
import Home from './telas/Home';
import './app.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./Router";
import GlobalStyle from "./GlobalStyle";
import DislexiaButton from "./telas/MenuAcessibilidade/btnDislexia";
import Cabecalho from "./navbar/Cabecalho/Cabecalho";
import Manutencao from "./Manutencao";


function App() {

  const [telaPequena, setTelaPequena] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const verificarTamanhoTela = () => {
      setTelaPequena(window.innerWidth < 1024);
    };

    window.addEventListener("resize", verificarTamanhoTela);

    return () => {
      window.removeEventListener("resize", verificarTamanhoTela);
    };
  }, []);

  return (
    <Router>
    <GlobalStyle />
    {!telaPequena && (
      <div>
        <Cabecalho />
        <DislexiaButton />
        <MainRoutes />
      </div>
    )}
    {telaPequena && (
      <Manutencao />
    )}
  </Router>
  );
}

export default App;
