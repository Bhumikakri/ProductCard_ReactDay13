import React from 'react';
import './cart.css';

const Cart = ({ cartItems, totalAmount }) => {
  return (
    <div className="Carts">
      <h1>Cart List</h1>
      <div className="price" id="cart">
        {cartItems.length === 0 ? <p>No Product added to the cart</p> : cartItems}
      </div>
      <div className="total">
        <h5>Total:</h5>
        <h5 id="total-amount">{`Rs ${totalAmount}`}</h5>
      </div>
    </div>
  );
};

export default Cart;
