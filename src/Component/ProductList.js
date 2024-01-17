import React, { useReducer } from "react";
import "./ProductList.css";
import Product from "./Product";
import Cart from "./Cart";
import CartItem from "./CartItem";

// Initial state for the cart quantities
const initialState = {
  quantities: {},
};

// Reducer function to handle state changes based on actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      // Increment the quantity for the specified product
      return {
        ...state,
        [action.productId]: (state[action.productId] || 0) + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        [action.productId]: Math.max((state[action.productId] || 0) - 1, 0),
      };
    default:
      // Return the current state for any other action
      return state;
  }
};

// Array of products with their id, name, and price
const Products = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Orange", price: 200 },
  { id: 3, name: "Mango", price: 300 },
  { id: 4, name: "Guava", price: 200 },
];

// Function to calculate the total amount based on CartItems
const calculateTotalAmount = (cartItems) => {
  // Filter out null items
  const validCartItems = cartItems.filter((item) => item !== null);

  return validCartItems.reduce((total, item) => {
    const itemPrice = item.props.product.price;
    const itemQuantity = item.props.quantity;
    return total + itemPrice * itemQuantity;
  }, 0);
};

const ProductList = () => {
  // State and dispatch for managing the cart
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Function to handle incrementing quantity for a product
  const onIncrement = (productId) => {
    dispatch({ type: "INCREMENT", productId });
  };

  // Function to handle decrementing quantity for a product
  const onDecrement = (productId) => {
    dispatch({ type: "DECREMENT", productId });
  };

  // Generate an array of CartItem components based on the current state
  const cartItems = Products.map((product) => {
    const quantity = cartState[product.name] || null;
    if (quantity > 0) {
      return (
        <CartItem key={product.id} product={product} quantity={quantity} />
      );
    }
    return quantity;
  });

  return (
    <div className="container">
      <h1 className="heading">Calculation Of ProductList</h1>
      <div className="products" id="product-list">
        <h1>Foods </h1>
        <div className="Allproduct">
          {Products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={() => onIncrement(product.name)}
              onDecrement={() => onDecrement(product.name)}
              quantity={cartState[product.name] || 0}
            />
          ))}
        </div>
      </div>
      <Cart
        cartItems={[...cartItems]}
        totalAmount={calculateTotalAmount(cartItems)}
      />
    </div>
  );
};

export default ProductList;
