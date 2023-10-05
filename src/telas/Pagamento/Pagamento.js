import React, { useState } from "react";
import "./pagamento.css";
import visa from "../../assets/visa_logo.png";
import masterCard from "../../assets/mastercard_logo.png";
import elo from "../../assets/elo_logo.png";
import pix from "../../assets/pix_logo.png";
import qr from "../../assets/qr.png";
import Modal from "react-modal";
import { CiLocationOn } from "react-icons/ci";
import { FiCopy } from "react-icons/fi";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import pagamento from "../../mocks/pagamento";
import { ScrollSpy } from "bootstrap";

import salgados from "../../assets/card-salgados.jpg";

import { useEffect } from "react";
import firebase from "../../firebaseConnection";

export default function Pagamento() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const [formaPagamentoSelecionada, setFormaPagamentoSelecionada] =
    useState("");

  const [pedidoAtual, setPedidoAtual] = useState(null);
  const [mensagem, setMensagem] = useState("Carregando...");

  useEffect(() => {
    const pedidoAtualRef = firebase.database().ref("users/pedidoAtual");

    pedidoAtualRef.on("value", (snapshot) => {
      const pedidoAtual = snapshot.val();

      if (!pedidoAtual || pedidoAtual.totalValor == 0) {
        setPedidoAtual(null);
        setMensagem(
          "Oops! Parece que você ainda não escolheu nenhum combo. 🤔 Volte e escolha um delicioso combo para adicionar à sua sacola e aproveitar uma refeição incrível!"
        );
      } else {
        setPedidoAtual(pedidoAtual);
        setMensagem(null);
      }
    });

    return () => pedidoAtualRef.off("value");
  }, []);


  const [valueCep, setValueCep] = useState("");
  useEffect(() => {
    const cepRef = firebase.database().ref('users/cep');

    cepRef.on('value', (snapshot) => {
      const cep = snapshot.val();
      setValueCep(cep);
    });

    return () => {
      cepRef.off()
    };
  }, []);

  function clickVoltar() {
    setCount(count - 1);
    setFormaPagamentoSelecionada("");
  }

  return (
    <>
      <div className="pagamento-div-pai">
        <h2 class="pagamento-title">Concluir</h2>

        {/* --------------------------------------------Confirmação------------------------------------------------- */}

        {count == 0 && (
          <div class="pagamento-checkout-panel">
            <div class="pagamento-panel-body">
              <div class="pagamento-progress-bar">
                <div class="pagamento-step pagamento-active"></div>
                <div class="pagamento-step"></div>
                <div class="pagamento-step"></div>
                <div class="pagamento-step"></div>
              </div>
              <div class="pagamento-pedidos-bg">
                {/* <div class="pagamento-pedidos"> */}
                {mensagem && <p className="mensagem-semPedido">{mensagem}</p>}
                {pedidoAtual && (
                  <ul className="lista-pedidos">
                    <div class="pagamento-pedidos">
                      {Object.keys(pedidoAtual).map((key) => {
                        const item = pedidoAtual[key];

                        const handleRemoverCombo = () => {
                          const pedidoAtualRef = firebase
                            .database()
                            .ref("users/pedidoAtual");

                          pedidoAtualRef
                            .child(key)
                            .remove()
                            .then(() => {
                              console.log("Combo removido com sucesso!");
                            })
                            .catch((error) => {
                              console.log("Erro ao remover combo: ", error);
                            });

                          const valorTotalRef = firebase
                            .database()
                            .ref("users/pedidoAtual/totalValor");
                          valorTotalRef.transaction(function (currentTotal) {
                            if (currentTotal === null || isNaN(currentTotal)) {
                              return 0;
                            } else {
                              return currentTotal - item.valor;
                            }
                          });
                        };

                        if (key !== "totalValor") {
                          return (
                            <div
                              class={
                                item[0]
                                  ? "pagamento-item-primeiro"
                                  : "pagamento-item"
                              }
                            >
                              <p className="tela-pagamento-item-combo">
                                {item.combo}
                              </p>
                              <div className="sacola-item-valor-botao">
                                <p>R$ {item.valor},00</p>
                                <p className="sacola-remove-item-pedro">
                                  <AiFillCloseCircle
                                    onClick={handleRemoverCombo}
                                    className=""
                                  />
                                </p>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </ul>
                )}
                {/* </div> */}
              </div>
              <div class="pagamento-localizacao">
                <div className="div-pagamento-localizacao-icon">
                  <CiLocationOn className="pagamento-localIcon" />
                </div>
                {/* <input type="" id="pagamento-localIcon" /> */}
                <p id="pagamento-localIcon-finalizar-confirmacao">{valueCep}</p> 
                {/* INPUT CEP */}
                <div className="div-pagamento-totalValor">
                  {pedidoAtual && (
                    <p className="div-pagamento-totalValor-mensagem">
                      R$ {pedidoAtual.totalValor},00
                    </p>
                  )}
                  {!pedidoAtual && (
                    <p className="div-pagamento-totalValor-mensagem">R$ 0,00</p>
                  )}
                </div>
              </div>
            </div>

            <div class="pagamento-panel-footer">
              <button
                class="pagamento-btn pagamento-back-btn"
                onClick={() => navigate("/")}
              >
                Voltar
              </button>
              <button
                class={
                  pedidoAtual
                    ? "pagamento-btn pagamento-next-btn"
                    : "pagamento-btn pagamento-next-btn-disable"
                }
                onClick={pedidoAtual ? () => setCount(count + 1) : null}
              >
                Confirmar
              </button>
            </div>
          </div>
        )}

        {/* --------------------------------------------Forma de pagamento------------------------------------------------- */}

        {count == 1 && (
          <div class="pagamento-checkout-panel">
            <div class="pagamento-panel-body">
              <div class="pagamento-progress-bar">
                <div class="pagamento-step pagamento-active"></div>
                <div class="pagamento-step pagamento-active"></div>
                <div class="pagamento-step"></div>
                <div class="pagamento-step"></div>
              </div>

              {count === 1 && formaPagamentoSelecionada === "" && (
                <div className="pagamento-notificacao">
                  <AiOutlineInfoCircle />
                  <p>
                    Por favor, selecione um método de pagamento antes de
                    prosseguir.
                  </p>
                </div>
              )}

              <div className="pagamento-payment-method-body">
                {/* "pagamento-payment-method-meio" */}
                <div
                  class={
                    formaPagamentoSelecionada === ""
                      ? "pagamento-payment-method-meio"
                      : formaPagamentoSelecionada === "pix"
                      ? "pagamento-payment-method-meio"
                      : "pagamento-payment-method-topo"
                  }
                >
                  <label
                    for="pagamento-credito"
                    class="pagamento-method pagamento-card"
                  >
                    <div class="pagamento-card-logos">
                      <img src={visa} />
                      <img src={masterCard} />
                    </div>

                    <div class="pagamento-radio-input">
                      <input
                        id="pagamento-credito"
                        type="radio"
                        name="payment"
                        onChange={() => setFormaPagamentoSelecionada("credito")}
                      />
                      Pagar com crédito
                    </div>
                  </label>

                  <label
                    for="pagamento-debito"
                    class="pagamento-method pagamento-card"
                  >
                    <div class="pagamento-card-logos">
                      <img src={visa} />
                      <img src={masterCard} />
                    </div>

                    <div class="pagamento-radio-input">
                      <input
                        id="pagamento-debito"
                        type="radio"
                        name="payment"
                        onChange={() => setFormaPagamentoSelecionada("debito")}
                      />
                      Pagar com débito
                    </div>
                  </label>

                  <label
                    for="pagamento-pix"
                    class="pagamento-method pagamento-pix"
                  >
                    <img class="pagamento-imgLogo" src={pix} />
                    <div class="pagamento-radio-input">
                      <input
                        id="pagamento-pix"
                        type="radio"
                        name="payment"
                        onChange={() => setFormaPagamentoSelecionada("pix")}
                      />
                      Pagar com pix
                    </div>
                  </label>
                </div>
              </div>

              {/* {formaPagamentoSelecionada === "credito" ? "block" : formaPagamentoSelecionada === "debito" ? "block" : "none"} */}
              {/* CREDITO VERIFICACAO */}
              <div
                className={
                  formaPagamentoSelecionada === "credito"
                    ? "pagamento-cartao-block"
                    : formaPagamentoSelecionada === "debito"
                    ? "pagamento-cartao-block"
                    : "pagamento-cartao-none"
                }
              >
                <div class="pagamento-input-fields">
                  <div class="pagamento-column-1">
                    <label for="pagamento-cardholder">Nome do titular</label>
                    <input type="text" id="pagamento-cardholder" />

                    <div class="pagamento-small-inputs">
                      <div>
                        <label for="pagamento-date">Validade</label>
                        <input
                          type="text"
                          name="numero"
                          pattern="[0-9]*"
                          id="pagamento-date"
                          className="pagamento-input-password"
                        />
                      </div>

                      <div>
                        <label for="pagamento-verification">CVV </label>
                        <input
                          type="password"
                          id="pagamento-verification"
                          className="pagamento-input-password"
                          maxlength="3"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pagamento-column-2">
                    <label for="pagamento-cardnumber">Número do cartão</label>
                    <input type="text" id="pagamento-cardnumber" />

                    <span class="pagamento-info">
                      * CVV é o código de segurança do cartão, número único de
                      três dígitos no verso do seu cartão separado do seu
                      número.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="pagamento-panel-footer">
              <button
                class="pagamento-btn pagamento-back-btn"
                onClick={() => clickVoltar()}
              >
                Voltar
              </button>
              <button
                class={
                  formaPagamentoSelecionada == ""
                    ? "pagamento-btn pagamento-next-btn-disable"
                    : "pagamento-btn pagamento-next-btn"
                }
                onClick={
                  formaPagamentoSelecionada == ""
                    ? null
                    : () => setCount(count + 1)
                }
              >
                Finalizar
              </button>
            </div>
          </div>
        )}

        {/* --------------------------------------------Finalizar------------------------------------------------- */}
        {/* --------------------------------------------QR code (PIX)------------------------------------------------- */}

        {count == 2 && formaPagamentoSelecionada == "pix" && (
          <div class="pagamento-checkout-panel">
            <div class="pagamento-panel-body">
              <div class="pagamento-progress-bar">
                <div class="pagamento-step pagamento-active"></div>
                <div class="pagamento-step pagamento-active"></div>
                <div class="pagamento-step pagamento-active"></div>
                <div class="pagamento-step "></div>
              </div>

              <div class="pagamento-pedidos-bg-finalizar">
                <div>
                  <img src={qr} className="img-finalizar-qr" />
                  <div class="pagamento-qrLink">
                    <FiCopy className="pagamento-copyIcon" />
                    <p>awkdvakwdkawdkad</p>
                    {/* <input type='text' id="pagamento-CopyIcon"></input> */}
                  </div>
                </div>
                <div className="finalizar-info">
                  <div>
                    <h5>Pedido</h5>
                  </div>
                  <div>
                    <div>
                      {Object.keys(pedidoAtual).map((key, index, array) => {
                        const item = pedidoAtual[key];
                        const ultimoItem = index === array.length - 2;

                        if (key !== "totalValor") {
                          return (
                            <div
                              className={
                                index === 0
                                  ? "pagamento-item-finalizar-primeiro"
                                  : ultimoItem
                                  ? "pagamento-item-finalizar-ultimo"
                                  : "pagamento-item-finalizar"
                              }
                            >
                              <p>{item.combo}</p>
                              <div class="valor-x">
                                <p>R$ {item.valor},00</p>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div className="valor-total">
                      <p className="valor-total-paragrafo">Total</p>
                      <p className="valor-total-paragrafo">
                        R$ {pedidoAtual.totalValor},00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pagamento-localizacao">
                <div className="div-pagamento-localizacao-icon">
                  <CiLocationOn className="pagamento-localIcon" />
                </div>
                <p id="pagamento-localIcon-finalizar">{valueCep}</p> 
                {/* INPUT CEP */}
              </div>
            </div>
            <div class="pagamento-panel-footer">
              <button
                class="pagamento-btn pagamento-back-btn"
                onClick={() => clickVoltar()}
              >
                Voltar
              </button>
            </div>
          </div>
        )}

        {/* --------------------------------------------cartão------------------------------------------------- */}

        {count == 2 &&
          (formaPagamentoSelecionada == "credito") |
            (formaPagamentoSelecionada == "debito") && (
            <div class="pagamento-checkout-panel">
              <div class="pagamento-panel-body">
                <div class="pagamento-progress-bar">
                  <div class="pagamento-step pagamento-active"></div>
                  <div class="pagamento-step pagamento-active"></div>
                  <div class="pagamento-step pagamento-active"></div>
                  <div class="pagamento-step "></div>
                </div>

                <div class="pagamento-pedidos-bg-finalizar">
                  <img src={salgados} className="img-finalizar " />
                  <div className="finalizar-info">
                    <div>
                      <h5>Pedido</h5>
                    </div>
                    <div>
                      <div>
                        {Object.keys(pedidoAtual).map((key, index, array) => {
                          const item = pedidoAtual[key];
                          const ultimoItem = index === array.length - 2;

                          if (key !== "totalValor") {
                            return (
                              <div
                                className={
                                  index === 0
                                    ? "pagamento-item-finalizar-primeiro"
                                    : ultimoItem
                                    ? "pagamento-item-finalizar-ultimo"
                                    : "pagamento-item-finalizar"
                                }
                              >
                                <p>{item.combo}</p>
                                <div class="valor-x">
                                  <p>R$ {item.valor},00</p>
                                </div>
                              </div>
                            );
                          }
                        })}
                      </div>
                      <div className="valor-total">
                        <p className="valor-total-paragrafo">Total</p>
                        <p className="valor-total-paragrafo">
                          R$ {pedidoAtual.totalValor},00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagamento-localizacao">
                  <div className="div-pagamento-localizacao-icon">
                    <CiLocationOn className="pagamento-localIcon" />
                  </div>
                  <p id="pagamento-localIcon-finalizar">{valueCep}</p>
                  {/* INPUT CEP */}
                </div>
              </div>
              <div class="pagamento-panel-footer">
                <button
                  class="pagamento-btn pagamento-back-btn"
                  onClick={() => clickVoltar()}
                >
                  Voltar
                </button>
              </div>
            </div>
          )}

        {count == 2 && formaPagamentoSelecionada == "" && setCount(count - 1)}
      </div>
    </>
  );
}
