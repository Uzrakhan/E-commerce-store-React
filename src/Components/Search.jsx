import React, {useState} from 'react';
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

    
    return(
        <div className='search-container'>
            <input type='text' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            <div className="search-results">
                {searchQuery && filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className='search-item'>
                            <p>{product.name}</p>
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