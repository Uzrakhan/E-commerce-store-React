import React from 'react';
import { Link } from 'react-router';
import products from '../products';
import ProductListing from './ProductListing';
import ProductDetails from '../pages/ProductDetails';

const FeaturedProducts = () => {
    const featuredProducts = products.sort(() => 0.5 - Math.random()).slice(0,7);

    return(
        <div>
            <div className='featured-products-container'>
                {featuredProducts.map((product) => (
                    <div 
                    key={product.id}
                    className='featured-products-card'
                    >
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <ProductListing
                            name={product.name}
                            image={product.image}
                            price={product.price}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default FeaturedProducts;