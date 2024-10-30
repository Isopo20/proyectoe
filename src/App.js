import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Carousel, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'pink', minHeight: '100vh' }}>
      <Navbar className="navbar-custom" expand="lg">
        <Navbar.Brand className="navbar-brand-custom" href="#home">MiTienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-link-custom" href="/">Home</Nav.Link> {/* Cambia a la ruta de la landing page */}
            <Nav.Link className="nav-link-custom" href="/nosotros">Nosotros</Nav.Link> {/* Cambia a la ruta de Nosotros */}
            <Nav.Link className="nav-link-custom" href="/contactanos">Contactanos</Nav.Link> {/* Cambia a la ruta de Contáctanos */}
            <Nav.Link className="nav-link-custom" href="/productos">Productos</Nav.Link> {/* Cambia a la ruta de Productos */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h1 className="section-title text-center mb-4">Nosotros</h1>
      
      {/* Contenedor del carrusel y la imagen */}
      <div className="content-container">
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
      </div>

      {/* Historia de la marca */}
      <section id="historia" className="panel mt-5">
        <h2 className="panel-title text-center">Nuestra Historia</h2>
        <p className="text-center">
          Desde nuestros inicios, hemos trabajado para ofrecer ropa de alta calidad que se adapte a las necesidades de todos nuestros clientes. Con cada colección, buscamos innovar y mejorar la experiencia de compra.
        </p>
      </section>

      {/* Valores de la marca */}
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

      {/* Testimonios */}
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

      {/* Botón de llamada a la acción */}
      <div className="text-center mt-5">
        <Button variant="danger" size="lg">Explora nuestros productos</Button>
      </div>
    </div>
  );
}

export default App;