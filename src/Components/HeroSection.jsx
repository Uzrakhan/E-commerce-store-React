import React from 'react';
import { Link } from 'react-router';

const HeroSection = () => {
    return(
        <div className="hero-section">
            <div className="hero-content">
                <h1>Welcome to Our E-Commerce Store</h1>
                <p>Discover the best products at unbeatable prices.</p>
                <Link to='/categories'>
                    <button className='hero-btn'>Explore More</button>
                </Link> 
            </div>
        </div>
    )
};

export default HeroSection;