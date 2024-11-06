import { useEffect, useState } from 'react';
// custom hooks for fetch details of the product using id.

export const fetchProductDetail = (id) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  return { product, error };
};
