
import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { fetchProducts } from '../use_Api_Handle/useFetchProducts';
import './productlist.css';

const ProductList = () => {
  const { products, error } = fetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  if (error) return <div className="error_message">Error fetching products: {error.message}</div>;
  if (!products) return <div className="loading_message">Loading...</div>;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-container">
      {/* Search box for searching items */}
      <div className="search-box">
        <label htmlFor="search" className="search-label">Search the product here</label>
        <input
          id="search"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      {/* Display filtered items after searching */}
      <div className="product-items">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <div className="no-results">No products found</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
