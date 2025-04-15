import React, { useState } from 'react';
import { useParams } from 'react-router';
import products from '../products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    const locations = ['Mumbai', 'Delhi', 'Noida','Kolkata','Varanasi', 'Chennai','Bhopal','Indore'];
    const [selectedLocation,setSelectedLocation] = useState('');
    const [activeSize,setActiveSize] = useState(null);

    if(!product) {
        return <p>No product found.</p>
    }

    const { addToCart } = useCart();


    const formattedPrice = product && product.originalPrice ? product.originalPrice.toLocaleString():'N/A';

    const discountedPrice = product.originalPrice - product.originalPrice * (parseInt(product.discountPercentage) / 100);
    const roundedDiscountedPrice = Math.round(discountedPrice);
    const formattedRoundedPrice = roundedDiscountedPrice.toLocaleString()

    //function to render category-specific details
    const renderCategoryDetails = (category) => {
        const handleSizeClick = (size) => {
            setActiveSize(size);
        }
        switch(category) {
            case 'Fashion(Men)':
                return (
                    <div>
                        <h4>Size Chart</h4>
                        {['S', 'M', 'L', 'XL'].map((size) => (
                            <button 
                             key={size}
                             className={`category-button ${activeSize === size ? 'active' : ''}`}
                             onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                );
            case 'Footwear':
                return(
                    <div>
                        <h4>Size Chart</h4>
                        {['6','7','8','9'].map((size) => (
                            <button
                             key={size}
                             className={`category-button ${activeSize === size ? 'active' : ''}`}
                             onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                );
            default: 
                return <p></p>
        }
    }
    return(
        <>
            <div className='product-det-card'>
                <div className='product-det-img'>
                    <img src={product.image} alt='product.name' width="100px" height='100px'/>
                </div>
                <div className='product-det-info'>
                    <p style={{color: 'gray'}}>{product.category}</p>
                    <h3>{product.name}</h3>
                    <div>
                        {product.ratings}   
                        <FontAwesomeIcon icon={faStar} />
                        (122)
                    </div>

                    <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '1vw'}}>
                        <span style={{fontWeight: 'bold', fontSize: '2vw'}}>
                            ₹{formattedRoundedPrice}
                        </span>
                        <span style={{fontWeight:'bold', textDecorationLine: 'line-through', color: 'gray'}}>
                            ₹{formattedPrice}
                        </span>
                        <span style={{color: 'green', fontWeight: 'bold'}}>
                            {product.discountPercentage}% off
                        </span>
                    </div>
                    
                    <div className='location-det'>
                        Deliver to:
                        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                            <option value='' disabled>
                                Select a location
                            </option>
                            {locations.map((location,index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>

                        {selectedLocation && (
                            <p>Delivery will be made to: <strong>{selectedLocation}</strong></p>
                        )}
                    </div>
                    <div>
                        {renderCategoryDetails(product.category)}
                    </div>
                    <div style={{marginTop: '2.5vw'}}>
                        <button 
                         className='add-to-cart-btn'
                         onClick={() => addToCart(product)}>
                            ADD TO CART
                        </button>
                    </div>
                    <p style={{color: 'gray', marginTop: '2vw'}}>Description: {product.description}</p>
                    <p style={{color: 'gray'}}>Cash on Delivery is available.</p>
                </div>
            </div>

            
        </>
    )
};

export default ProductDetails;