import React from 'react';
import { Link } from 'react-router';
import NavBar from '../Components/NavBar';
import HeroSection from '../Components/HeroSection';
import FeaturedProducts from '../Components/FeaturedProducts';
import Categories from './Categories';

const Home = () => {
    return(
        <div>
            <HeroSection />
            <FeaturedProducts />
        </div>
    )
};

export default Home;