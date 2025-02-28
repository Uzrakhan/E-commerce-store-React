import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import products from '../products';


const Search = ({ products }) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        setSearchQuery(searchInput);
    }

    
    const filteredProducts =  searchQuery ? products.filter((product) => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
     : [];

    const formattedPrice = (price) => {
        if(price) {
            return price.toLocaleString()
        }else{
            return 'N/A'
        }
    }
    return(
        <div className='search-container'>
            <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder='Search for products'/>
            <button onClick={handleSearch}>Search</button>
            <div className='search-results'>
                {searchQuery && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                            <div key={product.id} className='search-item'>
                                <Link to={`/product/${product.id}`}>
                                    <div className='search-left'>
                                        <img src={product.image} alt={product.name} width='80px' height='80px'/>
                                    </div>
                                    <div className='search-right'>
                                        <span>{product.name}</span>
                                        <p><strong>₹{formattedPrice(product.price)}</strong></p>
                                    </div>
                                </Link>
                            </div>
                        ))
                     ): searchQuery ? (
                        <p>No products found for '{searchQuery}'</p>
                    ): null}
            </div>
        </div>
    )
};

export default Search;