import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomeCombos.css";

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import cardChurrasco from '../../../assets/card-churrasco.jpg';
import cardFesta from '../../../assets/card-salgados.jpg';
import cardBurgue from '../../../assets/card-hamburguer.png';
 
export default function HomeCombos() {
  return (
      <div class="home-combo">
        <div class="home-combo-container-text">
          <h1 class="home-combo-container-text-titulo">Combos</h1>
          <p class="home-combo-container-text-descricao">Esses são nossos combos principais.<br />
            Para ver mais, clique abaixo</p>
          <div class="home-combo-container-text-divButton">
            <a href="/combos">
              <button class="home-combo-container-text-divButton-button">
                <a className="home-combo-container-text-divButton-button-descricao">Ver Todos</a>
              </button>
            </a>
          </div>
        </div>

        <div class="home-combo-container-carousel">
          <Carousel variant="ligth">
            <Carousel.Item >
              <div className='home-combo-container-carousel-card'>
                <Card className='home-combo-container-carousel-card-style'>
                  <Card.Img className='home-combo-container-carousel-card-image' variant="top" src={cardChurrasco} />
                  <Card.Body>
                    <Card.Title className='home-combo-container-carousel-card-titulo'>Churrasco</Card.Title>
                    <Card.Text className='home-combo-container-carousel-card-descricao'>
                      Muitas variedades de carnes para sua escolha perfeita.
                    </Card.Text>
                    <div className='home-combo-container-carousel-card-button-leticia'>
                      <Button className='home-combo-container-carousel-card-button-text-leticia'>Eu quero</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>

            <Carousel.Item >
              <div className='home-combo-container-carousel-card'>
                <Card className='home-combo-container-carousel-card-style'>
                  <Card.Img className='home-combo-container-carousel-card-image' variant="top" src={cardFesta} />
                  <Card.Body>
                    <Card.Title className='home-combo-container-carousel-card-titulo'>Festinha</Card.Title>
                    <Card.Text className='home-combo-container-carousel-card-descricao'>
                      Uma festa é uma solenidade comemorativa destinada a pessoas ou fatos importantes.
                    </Card.Text>
                    <div className='home-combo-container-carousel-card-button-leticia'>
                      <Button className='home-combo-container-carousel-card-button-text-leticia'>Eu quero</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>

            <Carousel.Item >
              <div className='home-combo-container-carousel-card'>
                <Card className='home-combo-container-carousel-card-style'>
                  <Card.Img className='home-combo-container-carousel-card-image' variant="top" src={cardBurgue} />
                  <Card.Body>
                    <Card.Title className='home-combo-container-carousel-card-titulo'>Hamburguer</Card.Title>
                    <Card.Text className='home-combo-container-carousel-card-descricao'>
                      Hamburgueres artesanais de varios tipos para sua escolha.
                    </Card.Text>
                    <div className='home-combo-container-carousel-card-button-leticia'>
                      <Button className='home-combo-container-carousel-card-button-text-leticia'>Eu quero</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
  )
};