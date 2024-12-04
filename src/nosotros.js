// Nosotros.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css';

function Nosotros() {
  return (
    <div className="content-container">
      <h1 className="section-title text-center mb-4">Nosotros</h1>

      <div className="carousel-container">
        <Carousel interval={3000}>
          <Carousel.Item>
            <div className="panel">
              <h2 className="panel-title">Visión</h2>
              <p>
                Buscamos darle al consumidor la mejor experiencia al comprar nuestros productos,
                facilitando los métodos de pago y agilizando los envíos.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="panel">
              <h2 className="panel-title">Misión</h2>
              <p>
                Nuestro objetivo es tener el catálogo más grande en ropa, al igual que expandirnos
                por todos los sitios en México, ofreciendo la mayor comodidad a la hora de que
                nuestros consumidores pidan envíos, usen diferentes métodos de pago, etc.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      
      <div>
        <img src='/img/tiendaropa.jpeg' className="right-image" alt="Tienda de ropa" />
      </div>

      <section id="historia" className="panel mt-5">
        <h2 className="panel-title text-center">Nuestra Historia</h2>
        <p className="text-center">
          Desde nuestros inicios, hemos trabajado para ofrecer ropa de alta calidad que se adapte a las necesidades de todos nuestros clientes. Con cada colección, buscamos innovar y mejorar la experiencia de compra.
        </p>
      </section>

      <section id="valores" className="panel mt-5 text-center">
        <h2 className="panel-title">Valores</h2>
        <div className="d-flex justify-content-center mt-3">
          <div className="value-card mx-3">
            <h4>Sostenibilidad</h4>
            <p>Comprometidos con el medio ambiente en cada prenda.</p>
          </div>
          <div className="value-card mx-3">
            <h4>Calidad</h4>
            <p>Ropa duradera y cuidadosamente seleccionada.</p>
          </div>
          <div className="value-card mx-3">
            <h4>Innovación</h4>
            <p>Siempre a la vanguardia de las últimas tendencias.</p>
          </div>
        </div>
      </section>

      <section id="testimonios" className="panel mt-5">
        <h2 className="panel-title text-center">Testimonios</h2>
        <div className="d-flex justify-content-center mt-3">
          <div className="testimonial mx-3">
            <p>"La mejor experiencia de compra que he tenido, ¡100% recomendados!"</p>
            <p>- Cliente Satisfecho</p>
          </div>
          <div className="testimonial mx-3">
            <p>"Ropa de excelente calidad, y el envío fue rápido y seguro."</p>
            <p>- Cliente Feliz</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
