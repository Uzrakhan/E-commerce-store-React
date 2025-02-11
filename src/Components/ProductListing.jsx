import React from 'react';
import products from '../products';

  
const  ProductListing = ({ image,name,price,ratings}) => {
    const truncateWords = (text, maxWords) => {
      const words = text.split(/\s+/);
      return words.length > maxWords ? words.slice(0, maxWords).join(' ') : text;
    };

    const formattedPrice = price ? price.toLocaleString() : 'N/A';
    return(
      <div className='prod-card'>
        <div className='prod-img-div'>
          <img src={image} alt='name' className='prod-img'/>
        </div>
        <div className='product-details'>
          <span style={{textDecoration: 'none'}}>{truncateWords(name,10)}</span>
          <p style={{fontWeight:'bold'}}>₹{formattedPrice}</p>
          <p>Ratings: {ratings}</p>
        </div>
      </div>
    )
};

export default ProductListing;