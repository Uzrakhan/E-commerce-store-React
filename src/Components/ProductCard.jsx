import React from 'react';

const truncateWords = (text, maxWords) => {
    const words = text.split(/\s+/);
    return words.length > maxWords ? words.slice(0, maxWords).join(' ') : text;
}

  
const  ProductCard = ({ image,name,price,category }) => {
    const formattedPrice = price ? price.toLocaleString() : 'N/A';
    return(
      <div className='prod-card'>
        <div className='prod-img-div'>
          <img src={image} alt='name' className='prod-img'/>
        </div>
        <div className='prod-details'>
          <span>{truncateWords(name,10)}</span>
          <p style={{fontWeight:'bold'}}>₹{formattedPrice}</p>
          <p>Category: {category}</p>
        </div>
      </div>
    )
};

export default ProductCard;