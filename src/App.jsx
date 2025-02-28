import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import PlaceOrder from './Components/PlaceOrder';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import Search from './Components/Search';


function ProductList() {
  
  return(
    <CartProvider>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories' element={<Categories />}/>
            <Route path='/product/:id' element={<ProductDetails />}/>
            <Route path="/about" element={<About />} />
            <Route path='/contact' element={<Contact />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/place-order' element={<PlaceOrder />}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  )
}

export default ProductList;
