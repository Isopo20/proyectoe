import React from 'react';
import './listStyles.css';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Camiseta Básica', price: '$20', img: '/img/camiseta.jpg' },
    { id: 2, name: 'Pantalones Jeans', price: '$40', img: '/img/jeans.jpg' },
    { id: 3, name: 'Vestido Casual', price: '$35', img: '/img/vestido.jpg' },
    { id: 4, name: 'Chaqueta', price: '$60', img: '/img/chaqueta.jpg' },
    { id: 5, name: 'Sudadera', price: '$30', img: '/img/sudadera.jpg' },
  ];

  return (
    <div className="products-container">
      <h2 className="section-title">Productos de Ropa</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
