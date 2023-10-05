import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import * as Icon from "react-bootstrap-icons";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";

import logoIcon from "../../assets/logo/logo6.0FunFiesta.png"; 
import logo2 from '../../assets/logo/logo3.0FunFiesta.png';
import logo2Cinza from '../../assets/logo/logo3.0FunFiestaCinza.png';
import carousel_image_um from "../../assets/carrossel_festinhas2.png";
import carousel_image_dois from "../../assets/imagem-churrasco-dois.png";
import carousel_image_tres from "../../assets/imagem-churrasco-tres.png";

import ModalLogin from "../../components/ModalLogin";
import ModalSacola from "react-modal";

import firebase from "../../firebaseConnection";

import "./Sacola.css"
import "./cabecalho.css";
import { Navigate } from "react-router-dom";

export default function Cabecalho() {
  
  const [initCarousel, setInitCarousel] = useState(0);

  const [modalShowLogin, setModalShowLogin] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setInitCarousel(selectedIndex);
  };

  function closeModal() {
    modalIsOpen(false);
  }

  const [pedidoAtual, setPedidoAtual] = useState(null);
  const [mensagem, setMensagem] = useState("Carregando...");

  useEffect(() => {
    const pedidoAtualRef = firebase.database().ref('users/pedidoAtual');

    pedidoAtualRef.on('value', (snapshot) => {
      const pedidoAtual = snapshot.val();

      if(!pedidoAtual || pedidoAtual.totalValor == 0) {
        setPedidoAtual(null);
        setMensagem("Ainda não pediu? Corra e adicione à sacola!");
      } else {
       setPedidoAtual(pedidoAtual);
       setMensagem(null);
      }
    });     

    return () => pedidoAtualRef.off('value');
  }, []);

  let pedidoAtualQuantidadeItens = 0;

  for(const key in pedidoAtual) {
    if(key != "totalValor") {
      pedidoAtualQuantidadeItens++;
    }
  }

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

  const handleChangeCep = (e) => {
    const novoCep = e.target.value;
    setValueCep(novoCep);
  
    firebase.database().ref('users/cep').set(novoCep)
      .then(() => {
        console.log('CEP atualizado no banco de dados.');
      })
      .catch((error) => {
        console.error('Erro ao atualizar o CEP no banco de dados:', error.message);
      });
  };

  return (
    <>
      <ModalLogin show={modalShowLogin} onHide={() => setModalShowLogin()} />

      <ModalSacola
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content sacola-modal-overlay-pedro"
      >
        <div className="sacola-content-pedro">
          <AiOutlineClose
            onClick={() => {
              setModalIsOpen();
            }}
            className="icon-x-pedro"
          />

          <div className="sacola-titulo-pedro">
            <p>Sacola</p>
          </div>

          <div className="sacola-itens-pedro">
            {mensagem && (
              <p className="sacola-itens-mensagem-pedro">{mensagem}</p>
            )}
            {pedidoAtual && (
              <ul className="sacola-lista-itens">
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
                        console.error("Erro ao remover combo:", error);
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
                          pedidoAtual[0]
                            ? "sacola-item-pedro-primeiro"
                            : "sacola-item-pedro"
                        }
                      >
                        <p className="sacola-item-combo">{item.combo}</p>
                        <div className="sacola-item-valor-botao">
                          <p style={{ fontWeight: 500, margin: 0 }}>
                            R$ {item.valor},00
                          </p>
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
              </ul>
            )}
          </div>

          <div className="sacola-finalizar-pedro">
            {!pedidoAtual && (
              <div className="sacola-valorTotal-pedro">R$ 0,00</div>
            )}

            {pedidoAtual && (
              <div className="sacola-valorTotal-pedro">
                R$ {pedidoAtual.totalValor},00
              </div>
            )}

            <div className="sacola-btnFinalizarV-pedro">
              <a href={pedidoAtual ? "/pagamento" : null}>
                {/* 
                      if(pedidoAtual) {

                      }
                */}
                <button
                  className={
                    pedidoAtual
                      ? "sacola-btnFinalizar-pedro"
                      : "sacola-btnFinalizar-pedro-disable"
                  } //
                >
                  Finalizar
                </button>
              </a>
            </div>
          </div>
        </div>
      </ModalSacola>
      
      <Navbar className="navbar" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img style={{ width: "25%" }} src={logoIcon} />
            </a>
          </Navbar.Brand>

          {/* onClick={() => {setModalShowCEP(!modalShowCEP)}} */}
          <Navbar.Brand style={{ width: "30%" }}>
            <input
              style={{ paddingLeft: 15, borderRadius: 15, width: "100%" }}
              placeholder="CEP"
              value={valueCep}
              onChange={handleChangeCep}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ width: "30%" }}>
            <Nav className="me-auto" />
            <Nav>
              <Nav.Link
                onClick={() => {
                  setModalIsOpen(!modalIsOpen);
                }}
              >
                <div className="container-pedido-atual-quantidade-itens">
                  {<Icon.Cart color="white" size={40} />}
                  {pedidoAtualQuantidadeItens > 0 && (
                    <spam className="pedido-atual-quantidade-itens">
                      {pedidoAtualQuantidadeItens}
                    </spam>
                  )}
                </div>
              </Nav.Link>

              <NavDropdown
                title={<Icon.PersonCircle color="white" size={40} />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item onClick={() => setModalShowLogin(true)}>
                  Faça login
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="/cadastro">
                  Cadastre-se
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Carousel
        className="carousel"
        activeIndex={initCarousel}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            src={carousel_image_um}
            className="carousel-image"
            alt="Primeira imagem"
          />
          <Carousel.Caption className="h-50">
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-image"
            src={carousel_image_dois}
            alt="Segunda imagem"
          />
          <Carousel.Caption className="h-50"></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carousel-image"
            src={carousel_image_tres}
            alt="Terceira imagem"
          />
          <Carousel.Caption className="h-50"></Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </>
  );
}
