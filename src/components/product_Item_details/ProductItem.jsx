

import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { Link } from 'react-router-dom';

import './productItem.css';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`} className="product-image-link">
                <img src={product.thumbnail} alt={product.title} className="product-image" />
            </Link>
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductItem;

