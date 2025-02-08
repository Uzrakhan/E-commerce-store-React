import { useEffect, useState } from 'react'
import './App.css'
import products from './products';
import { PAGE_SIZE } from './constants';
import ProductCard from './Components/ProductCard';



function ProductList() {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = () => {
    setSearchQuery(searchInput);
  }

  const filteredProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return(
    <div>
      <h1>Products</h1>
      <div>
        <label>Search Product</label>
        <input  type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        <button  onClick={handleSearch}>Search</button>
      </div>
      <div className='prod-container'>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} name={product.name} image={product.image} price={product.price} category={product.category}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList;
