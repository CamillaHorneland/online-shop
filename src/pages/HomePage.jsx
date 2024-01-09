import React, { useState } from 'react';
import ProductSearch from '../components/products/search/ProductFilter';
import ProductsList from '../components/products/ProductList';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <h1>Products</h1>
       <ProductSearch onSearch={handleSearch} />
      <div className="flex-card">
        <ProductsList searchTerm={searchTerm} />
      </div>
    </>
  );
}

export default HomePage;