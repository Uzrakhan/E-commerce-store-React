import React from 'react';
import { Link } from 'react-router-dom'; // Note: Use 'react-router-dom' for routing
import products from '../products';
import ProductListing from './ProductListing';

const FeaturedProducts = () => {
    // Randomly select featured products
    const featuredProducts = products.sort(() => 0.5 - Math.random()).slice(0, 9);

    return (
        <div>
            <div className="featured-products-container">
                {featuredProducts.map((product) => {
                    // Calculate discounted price for each product
                    const discountedPrice =
                        product.originalPrice -
                        product.originalPrice * (parseInt(product.discountPercentage, 10) / 100);
                    
                    const formattedPrice = product.originalPrice ? product.originalPrice.toLocaleString() : 'N/A';

                    return (
                        <div key={product.id} className="featured-products-card">
                            <Link to={`/product/${product.id}`}>
                                <ProductListing
                                    id={product.id}
                                    name={product.name}
                                    image={product.image}
                                    price={formattedPrice} // Pass the calculated price
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeaturedProducts;
