import React from 'react';
import { useParams } from 'react-router';
import products from '../products';

const ProductDetails = () => {
    const { id } = useParams();

    const product = products.find((item) => item.id === parseInt(id));

    if(!product) {
        return <p>No product found.</p>
    }

    return(
        <div className='product-det-card'>
            <div className=''>
                <img src={product.image} alt='product.name' width="100px" height='100px'/>
            </div>
            <h3>{product.name}</h3>
            <span>{product.price}</span>
        </div>
    )
};

export default ProductDetails;