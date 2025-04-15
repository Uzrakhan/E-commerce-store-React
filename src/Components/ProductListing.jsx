import React from 'react';
import products from '../products';

  
const  ProductListing = ({ id,image,name,ratings}) => {
    const truncateWords = (text, maxWords) => {
      const words = text.split(/\s+/);
      return words.length > maxWords ? words.slice(0, maxWords).join(' ') : text;
    };


    const product = products.find((item) => item.id === parseInt(id));

    const formattedPrice = product && product.originalPrice ? product.originalPrice.toLocaleString():'N/A';

    const discountedPrice = product.originalPrice - product.originalPrice * (parseInt(product.discountPercentage) / 100);
    const roundedDiscountedPrice = Math.round(discountedPrice);
    const formattedRoundedPrice = roundedDiscountedPrice.toLocaleString()
    return(
      <div className='prod-card'>
        <div className='prod-img-div'>
          <img src={image} alt='name' className='prod-img'/>
        </div>
        <div className='product-details'>
          <span style={{textDecoration: 'none'}}>{truncateWords(name,10)}</span>
          <div className='product-details-prices'>
            <p style={{color: 'black', fontWeight: 'bold'}}>₹{formattedRoundedPrice}</p>
            <p style={{fontWeight:'bold', textDecorationLine: 'line-through', color: 'gray'}}>₹{formattedPrice}</p>
            <p style={{color: 'green', fontWeight: 'bold'}}>{product.discountPercentage}% off</p>
          </div>
        </div>
      </div>
    )
};

export default ProductListing;