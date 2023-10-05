import React from "react";

import { Button, Form, Modal } from "react-bootstrap";
import { Facebook, Google } from "react-bootstrap-icons";

import "./ModalLogin.css";

export default function ModalLogin(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modalLogin"
    >
      <Modal.Header className="justify-content-center modalLogin-body modalLogin-body-header">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modalLogin-titulo"
        >
          Fun Fiesta
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modalLogin-body">
        <div className="d-flex justify-content-center flex-wrap">
          <Form.Floating className="mt-4 mb-4 w-75">
            <Form.Control
              id="loginEmail"
              type="email"
              placeholder="name@example.com"
              className="modalLogin-input"
            />
            <label htmlFor="loginEmail">Endereço de E-mail</label>
          </Form.Floating>

          <Form.Floating className="mb-4 w-75">
            <Form.Control
              id="loginSenha"
              type="password"
              placeholder="Password"
              className="modalLogin-input"
            />
            <label htmlFor="loginSenha">Senha</label>
          </Form.Floating>
        </div>

        <p className="modalLogin-cadastro-texto">
          Ainda não tem conta ?
          <a className="modalLogin-cadastro-link" href="/cadastro">
            {" "}
            Cadastre-se
          </a>
        </p>

        <div className="modalLogin-button-redes">
          <Button className="mb-4 w-50" variant="light">
            <Facebook size={23} style={{ marginRight: 15 }} />
            Continuar com o Facebook
          </Button>
          <Button className="mb-4 w-50" variant="light">
            <Google size={23} style={{ marginRight: 15 }} /> Continuar com o
            Google
          </Button>
        </div>
      </Modal.Body>

      <Modal.Footer className="modalLogin-body modalLogin-body-footer">
        <Button className="modalLogin-button-fechar" onClick={props.onHide}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
