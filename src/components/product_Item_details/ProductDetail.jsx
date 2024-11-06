

import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../use_Api_Handle/useFetchProductDetail';
import "./productDetail.css"
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const { product, error } = fetchProductDetail(id);
  const dispatch = useDispatch();

  if (error) return <div className="error_message">Error: {error.message}</div>;
  if (!product) return <div className="loading_message">Loading...</div>;

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-detail-container">
      <div className="product-image-section">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-info-section">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <p className="price">${product.price} <span className="discount">({product.discountPercentage}% off)</span></p>
        <p className="category">Category: {product.category}</p>
        <p className="stock-status">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>

        <AdditionalInfo product={product} />
        <CustomerReviews reviews={product.reviews} />
      </div>
    </div>
  );
};

const AdditionalInfo = ({ product }) => (
  <div className="additional-info">
    <h3>Additional Information</h3>
    <ul>
      <li><strong>Brand:</strong> {product.brand}</li>
      <li><strong>Weight:</strong> {product.weight} oz</li>
      <li><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</li>
      <li><strong>Warranty:</strong> {product.warrantyInformation}</li>
      <li><strong>Shipping:</strong> {product.shippingInformation}</li>
      <li><strong>SKU:</strong> {product.sku}</li>
    </ul>
  </div>
);

const CustomerReviews = ({ reviews }) => (
  <div className="reviews-section">
    <h3>Customer Reviews</h3>
    {reviews.length > 0 ? reviews.map((review, index) => (
      <div className="review" key={index}>
        <p><strong>{review.reviewerName}</strong> - {review.rating} ★</p>
        <p>{review.comment}</p>
        <p className="review-date">{new Date(review.date).toLocaleDateString()}</p>
      </div>
    )) : <p>No reviews yet</p>}
  </div>
);

export default ProductDetail;

