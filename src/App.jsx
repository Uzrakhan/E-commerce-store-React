import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import products from './products';
import { PAGE_SIZE } from './constants';
import ProductListing from './Components/ProductListing';
import Home from './pages/Home';
import NavBar from './Components/NavBar';
import Search from './Components/Search';
import Category from './Components/Category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function ProductList() {
  
  return(
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
          }/>
        </Routes>
      </div>
    </Router>
  )
}

export default ProductList;
