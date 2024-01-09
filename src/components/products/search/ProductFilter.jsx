import React, { useState } from 'react';

function ProductSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
      <input
         type="text"
         value={searchTerm}
         onChange={handleSearch}
         placeholder="Search products"
         className="search-input" 
       />
   );
}

export default ProductSearch;




