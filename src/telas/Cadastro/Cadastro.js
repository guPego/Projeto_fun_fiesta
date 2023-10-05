import React from "react";
import { Form } from "react-bootstrap";
import "./cadastro.css";
import logo1 from "../../assets/logo/logo7FunFiesta.png";

import Footer from "./Footer";
import "./Footer.css";

import InputMask from "react-input-mask"


export default function Cadastro() {

  function btnCadastro() {
    alert('Cadastrado com sucesso ✔');
  }

  return (
    <>
      <div className="cadastro">
        <div className="cadastro-body">
          <div className="cadastro-container-header">
            <img src={logo1} className="cadastro-container-header-image"></img>
            <h1 className="cadastro-container-header-titulo">Cadastro</h1>
          </div>

          <div className="cadastro-container-input">
            <Form.Floating className="mb-2">
              <Form.Control            
                type="name" 
                placeholder="Nome" 
                className="cadastro-input"
              />
              <label htmlFor="cadastroNome">Nome</label>
            </Form.Floating>

            <Form.Floating className="mb-2">
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="cadastro-input"
              />
              <label htmlFor="cadastroEmail">Endereço de E-mail </label>
            </Form.Floating>

            <Form.Floating className="mb-2">
              <Form.Control
                id="cadastroSenha"
                type="password"
                placeholder="Senha"
                className="cadastro-input"
              />
              <label htmlFor="cadastroSenha">Senha</label>
            </Form.Floating>

            <div className="input-cep-num mb-4">
              <Form.Floating className="input-width-40">
                <Form.Control
                  as={InputMask}
                  mask= "(99)99999-9999"
                  id="celular"
                  placeholder="celular"
                  className="cadastro-input"
                />
                <label htmlFor="celular">Celular</label>
              </Form.Floating>

              <Form.Floating className="input-width-40">
                <Form.Control
                  as={InputMask}
                  mask="99/99/9999"
                  id="cadastroNome"
                  placeholder="Data de nascimento"
                  className="cadastro-input"
                />
                <label htmlFor="loginEmail">Nascimento</label>
              </Form.Floating>
              
            </div>
            <div className="cadastro-container-botao mb-4 w-100">
                <a href="/"><button type="button" class="cadastro-botao" onClick={btnCadastro}>Cadastre-se</button></a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
