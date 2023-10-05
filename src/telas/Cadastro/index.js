import React from "react";
import { Form } from "react-bootstrap";
import "./index.css";

export default function CadastroUm() {
  return (
    <>
      <div className="cadastro-fundo">
        <div className="cartao-cadastro">
          <div className="cadastro-titulo">5
            <h1>Fun Fiesta - Cadastro</h1>
          </div>

          <div className="cadastro-inputs">
            <Form.Floating className="mb-2">
              <Form.Control 
                id="cadastroNome" 
                type="name" 
                placeholder="Nome" 
                className="input-border-radius"
              />
              <label htmlFor="cadastroNome">Nome</label>
            </Form.Floating>

            <Form.Floating className="mb-2">
              <Form.Control
                id="cadastroEmail"
                type="email"
                placeholder="name@example.com"
                className="input-border-radius"
              />
              <label htmlFor="cadastroEmail">Endereço de E-mail </label>
            </Form.Floating>

            <Form.Floating className="mb-2">
              <Form.Control
                id="cadastroSenha"
                type="password"
                placeholder="Senha"
                className="input-border-radius"
              />
              <label htmlFor="cadastroSenha">Senha</label>
            </Form.Floating>

            <div className="input-cep-num mb-4">
              <Form.Floating className="input-width-40">
                <Form.Control
                  id="cadastroNome"
                  type="email"
                  placeholder="name@example.com"
                  className="input-border-radius"
                />
                <label htmlFor="loginEmail">Celular</label>
              </Form.Floating>

              <Form.Floating className="input-width-40">
                <Form.Control
                  id="cadastroNome"
                  type="email"
                  placeholder="name@example.com"
                  className="input-border-radius"
                />
                <label htmlFor="loginEmail">Nascimento</label>
              </Form.Floating>
            </div>
          </div>

            <div className="cadastro-botao mb-4 w-100">
                <button type="button" class="botao">Cadastre-se</button>
            </div>
            
        </div>
      </div>
    </>
  );
}
