import React from "react";
import { BsInstagram, BsLinkedin, BsWhatsapp, BsTwitter, BsPhone} from "react-icons/bs";
import logo from "../../assets/logo/logo2.0FunFiesta.png";
import "./Footer.css";

export default function Footer() {
    return<>
    <footer className="footer">
        <ul className="ul-footer-diogo"> 
                <ul>
                    <li><h2 className="diogo-novo-footer">Inicio</h2></li>
                    <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">Home</h5></li>
                    <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">Cadapio</h5></li>
                    <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">Cadastro</h5></li>
                    <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">Avaliações</h5></li>
                </ul>
            <ul>
                <li><h2 className="diogo-novo-footer">Sobre Nós</h2></li>
                <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">Informações da Empresa</h5></li>
                <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">Contato</h5></li>
                <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">Blog</h5></li>
            </ul>
            <ul>
                <li><h2 className="diogo-novo-footer">Suporte</h2></li>
                <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">FAQ</h5></li>
                <li className="inicio-h3-item-footer-diogo"><h5 className="inicio-h5-footer-diogo">Telefones</h5></li>
            </ul>
        </ul>
        <div className="footer-diogo">
            <ul className="icons-list-footer" style={{padding: 0}}>
                <ul><li className="inicio-h3-item-footer-diogo"></li></ul>
                <li>
                    <BsInstagram size={35} class="icons-footer-diogo"/>
                </li>
                {/* <li>
                    <BsPhone size={35} class="icons-footer-diogo"/>
                </li> */}
                <li>
                    <BsLinkedin size={35} class="icons-footer-diogo"/>
                </li>
                <li>
                    <BsWhatsapp size={35} class="icons-footer-diogo"/>
                </li>
                <li>
                    <BsTwitter size={35} class="icons-footer-diogo"/>
                </li>
            </ul>
            <div className="div-footer-diogo"></div>
            <p className="style-copy-right-footer"> <img src={logo} className="logo-footer-diogo"/> &copy; 2023 <span>all rights reserved</span>
            </p>
        </div>
    </footer>
    </>;
}
