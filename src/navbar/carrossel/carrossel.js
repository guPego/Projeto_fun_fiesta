import React, { useEffect, useState } from "react";

import Carousel from "react-bootstrap/Carousel";

import logo from '../../assets/logo/logo3.0FunFiesta.png';
import carousel_image_um from "../../assets/carrossel_hamburguer.jpg";
import carousel_image_dois from "../../assets/carrossel_pizza.jpg";
import carousel_image_tres from "../../assets/carrossel_churrasco.jpg";

import firebase from "../../firebaseConnection";

import "./carrossel.css";

export default function Carrossel() {

    const [initCarousel, setInitCarousel] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setInitCarousel(selectedIndex);
    };


    const [pedidoAtual, setPedidoAtual] = useState(null);
    const [mensagem, setMensagem] = useState("Carregando...");

    useEffect(() => {
        const pedidoAtualRef = firebase.database().ref('users/pedidoAtual');

        pedidoAtualRef.on('value', (snapshot) => {
            const pedidoAtual = snapshot.val();

            if (!pedidoAtual || pedidoAtual.totalValor == 0) {
                setPedidoAtual(null);
                setMensagem("Ainda não pediu? Corra e adicione à sacola!");
            } else {
                setPedidoAtual(pedidoAtual);
                setMensagem(null);
            }
        });

        return () => pedidoAtualRef.off('value');
    }, []);

    return (
        <>
            <div className="bodyCarrossel">
                
            <div className="logoCentral">
                <img src={logo} className="logoCentralimg"/>
            </div>

            <Carousel
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
            </Carousel>
            </div>
        </>
    );
}
