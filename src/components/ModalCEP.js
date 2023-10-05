import cep from "cep-promise";
import React, { useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";

import "./ModalCEP.css";

export default function ModalCEP(props) {
  
  const [valueCep, setValueCep] = useState("");

  const buscandoCep = async() => {
    try {
      const resposta = await cep(valueCep);
      props.setBuscaCep(resposta);
    } catch (err) {
      switch (err.type) {
        case "service_error":
          props.buscaCep({ error: "CEP não encontrado" });
          break;
        case "validation_error":
          props.buscaCep({ error: "CEP possui um formato inválido" });
          break;
        default:
          props.buscaCep(err);
      }
    } 
  }

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
          CEP
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="modalLogin-body">
        <div className="d-flex justify-content-center flex-wrap">
          <Form.Floating className="mt-4 mb-4 w-50">
            <Form.Control
              id="cep"
              type="search"
              placeholder="name@example.com"
              className="modalLogin-input"
              value={valueCep}
              onClick={buscandoCep()}
              onChange={(evt) => {setValueCep(evt.target.value)}}
            />
            <label htmlFor="loginEmail">CEP</label>
          </Form.Floating>
          
          <Form.Floating className="mt-4 mb-4 ml-4' w-50">
            <Form.Control
              id="loginEmail"
              type="text"
              placeholder="name@example.com"
              className="modalLogin-input"
              value={props.buscaCep.street}
            />
            <label htmlFor="loginEmail">RUA</label>
          </Form.Floating>
          
          <Form.Floating className="mt-4 mb-4 w-50">
            <Form.Control
              id="loginEmail"
              type="text"
              placeholder="name@example.com"
              className="modalLogin-input"
              value={props.cepNumero}
              onChange={(evt) => {props.setCepNumero(evt.target.value)}}
            />
            <label htmlFor="loginEmail">NUMERO</label>
          </Form.Floating>
          
          <Form.Floating className="mt-4 mb-4 w-50">
            <Form.Control
              id="loginEmail"
              type="text"
              placeholder="name@example.com"
              className="modalLogin-input"
              value={props.cepComplemento}
              onChange={(evt) => {props.setCepComplemento(evt.target.value)}}
            />
            <label htmlFor="loginEmail">COMPLEMENTO</label>
          </Form.Floating>
          
          <Form.Floating className="mt-4 mb-4 w-50">
            <Form.Control
              id="loginEmail"
              type="text"
              placeholder="name@example.com"
              className="modalLogin-input"
              value={props.buscaCep.city}
            />
            <label htmlFor="loginEmail">CIDADE</label>
          </Form.Floating>
          
          <Form.Floating className="mt-4 mb-4 w-50">
            <Form.Control
              id="loginEmail"
              type="text"
              placeholder="name@example.com"
              className="modalLogin-input"
              value={props.buscaCep.state}
            />
            <label htmlFor="loginEmail">ESTADO</label>
          </Form.Floating>
        </div>
      </Modal.Body>

      <Modal.Footer className="modalLogin-body modalLogin-body-footer">
        <Button className="modalLogin-button-fechar" onClick={props.onHide}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
