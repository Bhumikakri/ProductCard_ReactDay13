import React from 'react';
import './product.css';

const Product = ({ product, onIncrement, onDecrement, quantity }) => {
  return (
    <div className="div1" key={product.id}>
      <h3 className="productName">{product.name}</h3>
      <h5 className="productPrice">{product.price}</h5>
      <div className="quantity" id={product.name}>
        <button className="remove" onClick={onDecrement}>-</button>
        <h6 className="quantProduct">{quantity}</h6>
        <button className="add" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Product;
