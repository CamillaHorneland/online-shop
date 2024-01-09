import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { url } from '../../constants/api';
import { useNavigate } from 'react-router-dom';

async function getProducts() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('There was an error fetching the products');
  }

  return response.json();
}

function ProductsList({ searchTerm }) {
  const navigate = useNavigate();

  const { isPending, error, data: products, isFetching } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return 'An error has occurred: ' + error.message;

  const filteredProducts = searchTerm
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <>
      {filteredProducts.map((product) => (
        <div key={product.id} className="card">
          <h2>{product.title}</h2>
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.description}</p>
          <button
            className="btn-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <a>See product..</a>
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductsList;
