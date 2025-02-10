import React, { useState } from 'react';
import { useParams } from 'react-router';
import products from '../products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {faLocationCrosshairs} from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    const locations = ['Mumbai', 'Delhi', 'Noida','Kolkata','Varanasi', 'Chennai','Bhopal','Indore'];
    const [selectedLocation,setSelectedLocation] = useState('');

    if(!product) {
        return <p>No product found.</p>
    }

    return(
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
                </div>
                <span style={{fontWeight: 'bold', marginTop: '1vw', fontSize: '2vw'}}>₹{product.price}</span>
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
                <p style={{color: 'gray', marginTop: '2vw'}}>Description: {product.description}</p>
            </div>
        </div>
    )
};

export default ProductDetails;