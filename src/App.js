// App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Nosotros from './nosotros'; // Asegúrate de tener este componente

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: 'pink', minHeight: '100vh' }}>
        <Navbar className="navbar-custom" expand="lg" bg="light" variant="light">
          <Navbar.Brand as={Link} to="/">MiTienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link> {/* Cambiado a la raíz */}
              <Nav.Link as={Link} to="/nosotros">nosotros</Nav.Link>
              <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={
            <>
              <header className="hero text-center">
                <img src={`${process.env.PUBLIC_URL}/img/imgfondo1.png`} className="hero-image" alt="Fondo" />
                <h1 className="hero-title">Bienvenido a Clothing.com</h1>
                <p className="hero-subtitle">La mejor experiencia de compra online</p>
                <Button variant="danger" size="lg" href="#products">Explora nuestros productos</Button>
              </header>

              <section id="about" className="about panel mt-5">
                <h2 className="section-title">Sobre nosotros</h2>
                <p>
                  En Clothing.com, ofrecemos una amplia variedad de productos de alta calidad a precios accesibles. Nuestro objetivo es hacer que tu experiencia de compra sea fácil y placentera.
                </p>
              </section>
            </>
          } />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
