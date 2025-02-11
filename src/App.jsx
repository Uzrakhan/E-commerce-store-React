import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css'
import products from './products';
import { PAGE_SIZE } from './constants';
import ProductListing from './Components/ProductListing';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import Footer from './Components/Footer';
import Category from './Components/Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import ProductDetails from './pages/ProductDetails';


function ProductList() {
  
  return(
    <CartProvider>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route  path='/' element={
              <div>
                <div className='categories'>
                <Category />
                </div>
              </div>
            }
            />
            <Route path='/product/:id' element={<ProductDetails />}/>
            <Route path="/about" element={<About />} />
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default ProductList;
