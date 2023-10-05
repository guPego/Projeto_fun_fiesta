import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import combosFestinhas from "../../../../mocks/combosFestinhas";
import "./ComboMaster.css";
import firebase from "../../../../firebaseConnection";

import setaCima from "../../../../assets/seta_cima.png";

export default function ComboMaster() {
  const comboMaster = combosFestinhas.comboMaster;

  const [showDetalhes, setShowDetalhes] = useState(false);

  const [quantidadeCoxinha, setQuantidadeCoxinha] = useState(0);
  const [quantidadeEnroladinho, setQuantidadeEnroladinho] = useState(0);
  const [quantidadePastel, setQuantidadePastel] = useState(0);
  const [quantidadeKibe, setQuantidadeKibe] = useState(0);
  const [quantidadeTotalComida, setquantidadeTotalComida] = useState(0);

  const [quantidadeCocacola, setQuantidadeCocacola] = useState(0);
  const [quantidadeGuarana, setQuantidadeGuarana] = useState(0);
  const [quantidadeFanta, setQuantidadeFanta] = useState(0);
  const [quantidadeSucoLaranja, setQuantidadeSucoLaranja] = useState(0);
  const [quantidadeSucoLimao, setQuantidadeSucoLimao] = useState(0);
  const [quantidadeSucoMaracuja, setQuantidadeSucoMaracuja] = useState(0);
  const [quantidadeTotalBebida, setQuantidadeTotalBebida] = useState(0);

  const inseriComboMaster = {
    combo: "Combo Master Festas",
    valor: 360
  }

  async function insereSacolaComboMaster() {

    let pedidoAtualRef = await firebase.database().ref('users/pedidoAtual');
    let keyPedidoAtual = pedidoAtualRef.push(inseriComboMaster).key;
    
    pedidoAtualRef.child(keyPedidoAtual);

    let valorTotalRef = await firebase.database().ref('users/pedidoAtual/totalValor');
    valorTotalRef.transaction(function(currentTotal) {
      if(currentTotal === null) {
        return inseriComboMaster.valor;
      } else {
        return currentTotal + inseriComboMaster.valor;
      }
    })
  }

  function MaisMenosComida(incremento, oque) {
    if (oque == "coxinha") {
      if (incremento == "maior" && quantidadeCoxinha < 16 && quantidadeTotalComida < 16) {
        setQuantidadeCoxinha(quantidadeCoxinha + 1);
        setquantidadeTotalComida(quantidadeTotalComida + 1);
      } else if (incremento == "menor" && quantidadeCoxinha > 0) {
        setQuantidadeCoxinha(quantidadeCoxinha - 1);
        setquantidadeTotalComida(quantidadeTotalComida - 1);
      }
    }

    if (oque == "enroladinho") {
      if (
        incremento == "maior" &&
        quantidadeEnroladinho < 16 &&
        quantidadeTotalComida < 16
      ) {
        setQuantidadeEnroladinho(quantidadeEnroladinho + 1);
        setquantidadeTotalComida(quantidadeTotalComida + 1);
      } else if (incremento == "menor" && quantidadeEnroladinho > 0) {
        setQuantidadeEnroladinho(quantidadeEnroladinho - 1);
        setquantidadeTotalComida(quantidadeTotalComida - 1);
      }
    }

    if (oque == "pastel") {
      if (
        incremento == "maior" &&
        quantidadePastel < 16 &&
        quantidadeTotalComida < 16
      ) {
        setQuantidadePastel(quantidadePastel + 1);
        setquantidadeTotalComida(quantidadeTotalComida + 1);
      } else if (incremento == "menor" && quantidadePastel > 0) {
        setQuantidadePastel(quantidadePastel - 1);
        setquantidadeTotalComida(quantidadeTotalComida - 1);
      }
    }

    if (oque == "kibe") {
      if (
        incremento == "maior" &&
        quantidadeKibe < 16 &&
        quantidadeTotalComida < 16
      ) {
        setQuantidadeKibe(quantidadeKibe + 1);
        setquantidadeTotalComida(quantidadeTotalComida + 1);
      } else if (incremento == "menor" && quantidadeKibe > 0) {
        setQuantidadeKibe(quantidadeKibe - 1);
        setquantidadeTotalComida(quantidadeTotalComida - 1);
      }
    }
  }

  function MaisMenosBebidas(incremento, oque) {
    if (oque == "cocacola") {
      if (
        incremento == "maior" &&
        quantidadeCocacola < 14 &&
        quantidadeTotalBebida < 14
      ) {
        setQuantidadeCocacola(quantidadeCocacola + 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida + 1);
      } else if (incremento == "menor" && quantidadeCocacola > 0) {
        setQuantidadeCocacola(quantidadeCocacola - 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida - 1);
      }
    }

    if (oque == "guarana") {
      if (
        incremento == "maior" &&
        quantidadeGuarana < 14 &&
        quantidadeTotalBebida < 14
      ) {
        setQuantidadeGuarana(quantidadeGuarana + 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida + 1);
      } else if (incremento == "menor" && quantidadeGuarana > 0) {
        setQuantidadeGuarana(quantidadeGuarana - 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida - 1);
      }
    }

    if (oque == "fanta") {
      if (
        incremento == "maior" &&
        quantidadeFanta < 14 &&
        quantidadeTotalBebida < 14
      ) {
        setQuantidadeFanta(quantidadeFanta + 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida + 1);
      } else if (incremento == "menor" && quantidadeFanta > 0) {
        setQuantidadeFanta(quantidadeFanta - 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida - 1);
      }
    }

    if (oque == "sucoLaranja") {
      if (
        incremento == "maior" &&
        quantidadeSucoLaranja < 14 &&
        quantidadeTotalBebida < 14
      ) {
        setQuantidadeSucoLaranja(quantidadeSucoLaranja + 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida + 1);
      } else if (incremento == "menor" && quantidadeSucoLaranja > 0) {
        setQuantidadeSucoLaranja(quantidadeSucoLaranja - 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida - 1);
      }
    }

    if (oque == "sucoLimao") {
      if (
        incremento == "maior" &&
        quantidadeSucoLimao < 14 &&
        quantidadeTotalBebida < 14
      ) {
        setQuantidadeSucoLimao(quantidadeSucoLimao + 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida + 1);
      } else if (incremento == "menor" && quantidadeSucoLimao > 0) {
        setQuantidadeSucoLimao(quantidadeSucoLimao - 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida - 1);
      }
    }

    if (oque == "sucoMaracuja") {
      if (
        incremento == "maior" &&
        quantidadeSucoMaracuja < 14 &&
        quantidadeTotalBebida < 14
      ) {
        setQuantidadeSucoMaracuja(quantidadeSucoMaracuja + 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida + 1);
      } else if (incremento == "menor" && quantidadeSucoMaracuja > 0) {
        setQuantidadeSucoMaracuja(quantidadeSucoMaracuja - 1);
        setQuantidadeTotalBebida(quantidadeTotalBebida - 1);
      }
    }
  }

  return (
    <>
      <div>
        <div className="combo-header-titulo">
          <h2 class="combo-nome">{comboMaster.titulo}</h2>
        </div>

        {!showDetalhes && (
          <div class="combo-detalhe">
            <div className="combo-detalhe-produto">
              <div className="combo-descricao">
                <ul className="combo-descricao-lista">
                  {comboMaster.naoDetalhado.itens.map((item) => {
                    return <li className="combo-descricao-item">{item}</li>;
                  })}
                </ul>
              </div>
            </div>

            <div className="combo-detalhe-preco">
              <h3 class="combo-preco">
                Valor: R${comboMaster.naoDetalhado.valor}
              </h3>
              <button
                onClick={() => {
                  setShowDetalhes(true);
                }}
                class="combo-botao"
              >
                Mais detalhes
              </button>
            </div>
          </div>
        )}

        {showDetalhes && (
          <div class="fundo-combo">
            <div className="combo-divisao">
              <div className="container-comida">
                <h4 className="container-titulo">
                  {comboMaster.detalhado.containerComida.titulo}{" "}
                  <h5 className="container-titulo-unidade">(400 unid)</h5>
                </h4>

                <div className="container-linha">
                  <h5>
                    {comboMaster.detalhado.containerComida.itens[0]} (25unid)
                  </h5>
                  <div className="linha-quantidade">
                    <BsChevronDoubleLeft
                      style={{}}
                      size={20}
                      color={quantidadeCoxinha > 0 ? "black" : "gray"}
                      onClick={() => MaisMenosComida("menor", "coxinha")}
                    />
                    {quantidadeCoxinha}
                    <BsChevronDoubleRight
                      size={20}
                      color={quantidadeTotalComida == 16 ? "gray" : "black"}
                      onClick={() => MaisMenosComida("maior", "coxinha")}
                    />
                  </div>
                </div>

                <div className="container-linha">
                  <h5>
                    {comboMaster.detalhado.containerComida.itens[1]} (25unid)
                  </h5>
                  <div className="linha-quantidade">
                    <BsChevronDoubleLeft
                      style={{}}
                      size={20}
                      color={quantidadeEnroladinho > 0 ? "black" : "gray"}
                      onClick={() => MaisMenosComida("menor", "enroladinho")}
                    />
                    {quantidadeEnroladinho}
                    <BsChevronDoubleRight
                      size={20}
                      color={quantidadeTotalComida == 16 ? "gray" : "black"}
                      onClick={() => MaisMenosComida("maior", "enroladinho")}
                    />
                  </div>
                </div>

                <div className="container-linha">
                  <h5>
                    {comboMaster.detalhado.containerComida.itens[2]} (25unid)
                  </h5>
                  <div className="linha-quantidade">
                    <BsChevronDoubleLeft
                      style={{}}
                      size={20}
                      color={quantidadePastel > 0 ? "black" : "gray"}
                      onClick={() => MaisMenosComida("menor", "pastel")}
                    />
                    {quantidadePastel}
                    <BsChevronDoubleRight
                      size={20}
                      color={quantidadeTotalComida == 16 ? "gray" : "black"}
                      onClick={() => MaisMenosComida("maior", "pastel")}
                    />
                  </div>
                </div>

                <div className="container-linha">
                  <h5>
                    {comboMaster.detalhado.containerComida.itens[3]} (25unid)
                  </h5>
                  <div className="linha-quantidade">
                    <BsChevronDoubleLeft
                      style={{}}
                      size={20}
                      color={quantidadeKibe > 0 ? "black" : "gray"}
                      onClick={() => MaisMenosComida("menor", "kibe")}
                    />
                    {quantidadeKibe}
                    <BsChevronDoubleRight
                      size={20}
                      color={quantidadeTotalComida == 16 ? "gray" : "black"}
                      onClick={() => MaisMenosComida("maior", "kibe")}
                    />
                  </div>
                </div>
              </div>

              {/* BEBIDAS  BEBIDAS  BEBIDAS  BEBIDAS  BEBIDAS  BEBIDAS */}

              <div className="container-bebida">
                <div className="container-comida">
                  <h4 className="container-titulo">
                    {comboMaster.detalhado.containerBebida.titulo}{" "}
                    <h5 className="container-titulo-unidade">
                      (14 Refrigerantes 2L ou 14 Suco 1L)
                    </h5>
                  </h4>

                  <div className="container-linha">
                    <h5>{comboMaster.detalhado.containerBebida.itens[0]}</h5>
                    <div className="linha-quantidade">
                      <BsChevronDoubleLeft
                        style={{}}
                        size={20}
                        color={quantidadeCocacola > 0 ? "black" : "gray"}
                        onClick={() => MaisMenosBebidas("menor", "cocacola")}
                      />
                      {quantidadeCocacola}
                      <BsChevronDoubleRight
                        size={20}
                        color={quantidadeTotalBebida == 14 ? "gray" : "black"}
                        onClick={() => MaisMenosBebidas("maior", "cocacola")}
                      />
                    </div>
                  </div>

                  <div className="container-linha">
                    <h5>{comboMaster.detalhado.containerBebida.itens[1]}</h5>
                    <div className="linha-quantidade">
                      <BsChevronDoubleLeft
                        style={{}}
                        size={20}
                        color={quantidadeGuarana > 0 ? "black" : "gray"}
                        onClick={() => MaisMenosBebidas("menor", "guarana")}
                      />
                      {quantidadeGuarana}
                      <BsChevronDoubleRight
                        size={20}
                        color={quantidadeTotalBebida == 14 ? "gray" : "black"}
                        onClick={() => MaisMenosBebidas("maior", "guarana")}
                      />
                    </div>
                  </div>

                  <div className="container-linha">
                    <h5>{comboMaster.detalhado.containerBebida.itens[2]}</h5>
                    <div className="linha-quantidade">
                      <BsChevronDoubleLeft
                        style={{}}
                        size={20}
                        color={quantidadeFanta > 0 ? "black" : "gray"}
                        onClick={() => MaisMenosBebidas("menor", "fanta")}
                      />
                      {quantidadeFanta}
                      <BsChevronDoubleRight
                        size={20}
                        color={quantidadeTotalBebida == 14 ? "gray" : "black"}
                        onClick={() => MaisMenosBebidas("maior", "fanta")}
                      />
                    </div>
                  </div>

                  <div className="container-linha">
                    <h5>{comboMaster.detalhado.containerBebida.itens[3]}</h5>
                    <div className="linha-quantidade">
                      <BsChevronDoubleLeft
                        style={{}}
                        size={20}
                        color={quantidadeSucoLaranja > 0 ? "black" : "gray"}
                        onClick={() => MaisMenosBebidas("menor", "sucoLaranja")}
                      />
                      {quantidadeSucoLaranja}
                      <BsChevronDoubleRight
                        size={20}
                        color={quantidadeTotalBebida == 14 ? "gray" : "black"}
                        onClick={() => MaisMenosBebidas("maior", "sucoLaranja")}
                      />
                    </div>
                  </div>

                  <div className="container-linha">
                    <h5>{comboMaster.detalhado.containerBebida.itens[4]}</h5>
                    <div className="linha-quantidade">
                      <BsChevronDoubleLeft
                        style={{}}
                        size={20}
                        color={quantidadeSucoLimao > 0 ? "black" : "gray"}
                        onClick={() => MaisMenosBebidas("menor", "sucoLimao")}
                      />
                      {quantidadeSucoLimao}
                      <BsChevronDoubleRight
                        size={20}
                        color={quantidadeTotalBebida == 14 ? "gray" : "black"}
                        onClick={() => MaisMenosBebidas("maior", "sucoLimao")}
                      />
                    </div>
                  </div>

                  <div className="container-linha">
                    <h5>{comboMaster.detalhado.containerBebida.itens[5]}</h5>
                    <div className="linha-quantidade">
                      <BsChevronDoubleLeft
                        style={{}}
                        size={20}
                        color={quantidadeSucoMaracuja > 0 ? "black" : "gray"}
                        onClick={() =>
                          MaisMenosBebidas("menor", "sucoMaracuja")
                        }
                      />
                      {quantidadeSucoMaracuja}
                      <BsChevronDoubleRight
                        size={20}
                        color={quantidadeTotalBebida == 14 ? "gray" : "black"}
                        onClick={() =>
                          MaisMenosBebidas("maior", "sucoMaracuja")
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-pagamento">
              <div className="pagamento-texto">
                <h4 className="pagamento-titulo">
                  Total:
                  <h4 className="pagamento-subtitulo">R${comboMaster.valor}</h4>
                </h4>
              </div>
              <button
                className={
                  quantidadeTotalComida < 16
                    ? "pagamento-button-disable"
                    : quantidadeTotalBebida < 14
                    ? "pagamento-button-disable"
                    : "pagamento-button"
                }
                onClick={
                  quantidadeTotalComida < 16
                    ? null
                    : quantidadeTotalBebida < 14
                    ? null
                    : insereSacolaComboMaster
                }
              >
                <h4 style={{ margin: 0, padding: 0, border: "none" }}>
                  Adicionar
                </h4>
              </button>
            </div>
            <div className="container-botao-detalhe">
              <button
                className="botao-detalhe"
                onClick={() => {
                  setShowDetalhes(false);
                }}
              >
                <img className="image-botao-detalhe" src={setaCima} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
