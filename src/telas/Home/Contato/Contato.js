import React from "react";
import { BsInstagram, BsLinkedin, BsWhatsapp, BsTwitter} from "react-icons/bs";
import "./contato.css";

export default function Contato() {
  return (
    <div class="fundoContato contato">
      <div class="contato-container">
        <div>
          <div>
          <h1 class="contato-container-titulo">Contatos:</h1>
        </div>
        <div class="contato-container-icons">
              <div>
                <a href='https://instagram.com/funfiestabh?igshid=MzRlODBiNWFlZA=='>
                  <BsInstagram size={35} className="contato-icons-diogo"/>
                </a>
              </div>
              <div>
                <a href="">
                  <BsWhatsapp size={35} className="contato-icons-diogo" />
                </a>
              </div>
              <div>
                <a href="">
                  <BsLinkedin size={35} className="contato-icons-diogo" />
                </a>
              </div>
              <div>
                <a href="">
                  <BsTwitter size={35} className={"contato-icons-diogo"}/>
                </a>
              </div>
            </div>
        </div>
        <div className="contato-container-topicos">
          <h3 class="contato-tituloContato endereco">Endereços:</h3>
          <p class="contato-fraseContato rua">
            Rua Paineiras, 1300 - Contagem.
          </p>
        </div>
        <div className="contato-container-topicos">
          <h3 class="contato-tituloContato email">E-mail:</h3>
          <p class="contato-fraseContato nome">funFiestaLTDA@gmail.com</p>
        </div>
        <div className="contato-container-topicos">
          <h3 class="contato-tituloContato contato">Contato:</h3>
          <p class="contato-fraseContato numero">
            (31) 1234-5678 | (31) 93333-4444{" "}
          </p>
        </div>
        </div>
      </div>
  );
}
