

import React from 'react';
import CartItem from './CartItems';
import { useSelector } from 'react-redux';
import './cart.css'; 

const Cart = () => {
  // Fetch items from the cart
  const { items } = useSelector((state) => state.cart);

  // If there are no items, display a message
  if (!items || items.length === 0) {
    return <h2 className="empty-cart">No Items in the Cart</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <div className="cart-items">
        {items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
