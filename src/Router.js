import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./telas/Home";
import Cadastro from './telas/Cadastro/Cadastro';
import Combos from './telas/Combos';
import Churrasco from "./telas/Combos/Churrasco/Churrasco";
import Festinha from './telas/Combos/Festinha/Festinha';
import Pizza from './telas/Combos/Pizza/Pizza';
import Hamburguer from './telas/Combos/Hamburguer/Hamburguer';
import Pagamento from "./telas/Pagamento/Pagamento";

export default function MainRoutes () {
    return <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/combos" element={<Combos />} />
            <Route path="/combos/churrasco" element={<Churrasco />} />
            <Route path="/combos/festas" element={<Festinha />} />
            <Route path="/combos/pizza" element={<Pizza />} />
            <Route path="/combos/hamburguer" element={<Hamburguer />} />
            <Route path="/pagamento" element={<Pagamento />} />
        </Routes>
    </>
}