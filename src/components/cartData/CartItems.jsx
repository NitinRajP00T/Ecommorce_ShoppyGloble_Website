import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../../store/cartSlice';
import './cart.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Dispatch functions for quantity control and removal
  const handleDecrement = () => dispatch(decrementQuantity(item));
  const handleIncrement = () => dispatch(incrementQuantity(item));
  const handleRemove = () => dispatch(removeItem(item));

  return (
    <div className="cart-item">
      <img className="cart-item-image" src={item.thumbnail} alt={item.title} />

      <div className="cart-item-info">
        <h2 className="cart-item-title">{item.title}</h2>

        <div className="quantity-container">
          <button className="quantity-button" onClick={handleDecrement}>-</button>
          <span className="cart-item-quantity">{item.quantity}</span>
          <button className="quantity-button" onClick={handleIncrement}>+</button>
        </div>

        <p className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</p>
        <button className="remove-button" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
