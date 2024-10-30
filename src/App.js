import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'pink', minHeight: '100vh' }}>
      <Navbar />
      <h1>Nosotros</h1>
      <Carousel interval={3000}> {/* Cambia automáticamente cada 5 segundos */}
        <Carousel.Item>
          <div className="panel">
            <h2>Visión</h2>
            <p>
              Buscamos darle al consumidor la mejor experiencia al comprar nuestros productos, 
              facilitando los métodos de pago y agilizando los envíos.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="panel">
            <h2>Misión</h2>
            <p>
              Nuestro objetivo es tener el catálogo más grande en ropa, al igual que expandirnos 
              por todos los sitios en México ofreciendo la mayor comodidad a la hora de que 
              nuestros consumidores pidan envíos, usen diferentes métodos de pago, etc.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
      <img src='/img/tiendaropa.jpeg' className="right-image"></img>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="brand">
          Tienda de ropa
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Nosotros</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#contact">Contáctanos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
