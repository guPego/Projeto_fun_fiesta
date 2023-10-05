import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";

import sacola from "../mocks/sacola";

import "./style.css";
import { Navigate } from "react-router-dom";

Modal.setAppElement("#root");


export default function Sacola() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  
  return (
    <>

      <button onClick={() => {setModalIsOpen(!modalIsOpen)}}>Sacola</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content sacola-modal-overlay-pedro"
      >
        <div className="sacola-content-pedro">

        <AiOutlineClose onClick={closeModal} className="icon-x-pedro" />

          <div className="sacola-titulo-pedro">
            <p>Sacola</p>
          </div>

          <div className="sacola-itens-pedro">

            {/* {sacola.itens.map((item) => {
              return (
                <>
                  <div class="sacola-item-pedro">
                    <p>{item.titulo}</p>
                    <p>R$ {item.preco}</p>
                    <p className="sacola-remove-item-pedro"><AiFillCloseCircle className="" /></p>
                  </div>

                </>
              )
            })} */}

          </div>

          <div className="sacola-finalizar-pedro">

            <div className="sacola-valorTotal-pedro">
              <p >R$ 524,00</p>
            </div>

            <div className="sacola-btnFinalizarV-pedro">
              <button
                className="sacola-btnFinalizar-pedro"
                onClick={() => Navigate("/pagamento")}>Finalizar</button>
            </div>
          </div>
        </div>
      </Modal>
      
    </>
  )
}