import React from 'react';
import './cartItem.css';

const CartItem = ({ product, quantity }) => {
  return (
    <div className="item1" key={product.id}>
      <h5 className="productCartName">{product.name}</h5>
      <div className="content">
        <h5 className="quantCartProduct">{quantity}</h5>
        <h5>*</h5>
        <h5 className="productCartPrice">{product.price}</h5>
      </div>
    </div>
  );
};

export default CartItem;
