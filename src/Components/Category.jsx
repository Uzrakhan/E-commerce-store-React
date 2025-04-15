import React, { useState } from 'react';
import products from '../products';
import ProductListing from './ProductListing';
import { Link } from 'react-router-dom';

const Category = () => {
  const categories = [...new Set(products.map((product) => product.category))];
  const [isSortedByPrice,setIsSortedByPrice] = useState(false);
  const [isSortedByRatings,setIsSortedByRatings] = useState(false);


    const groupByCategory = (items) => {
        return items.reduce((acc, product) => {
          if(!acc[product.category]) {
            acc[product.category] = [];
          }
    
          acc[product.category].push(product);
    
          return acc;
        }, {});
    };

    const getSortedProducts = () => {
      let sorted = [...products];

      if(isSortedByPrice || isSortedByRatings) {
        sorted.sort((a,b) => {
          if(isSortedByRatings && a.ratings !== b.ratings) {
            return b.ratings - a.ratings;
          }
          if(isSortedByPrice) {
            return a.price - b.price;
          }
          return 0;
        })
      }
      return sorted;
    }


    const sortedProducts = getSortedProducts();
    const groupedProducts = groupByCategory(sortedProducts);

    const handleSortToggleByPrice = () => {
      setIsSortedByPrice((prev) => !prev);
    };

    const handleSortToggleByRatings = () => {
      setIsSortedByRatings((prev) => !prev)
    }
    return (
      <div>
        <div style={{ padding: '2vw', textAlign: 'center'}}>
          <button
           style={{
            backgroundColor: isSortedByPrice ? '#E03546' : 'white',
            color: isSortedByPrice ? 'white' : 'gray',
            padding: '0.2vw 1.6vw',
            border: '1px solid gray',
            borderRadius: '10px',
            marginBottom: '2vw',
            marginRight: '3vw',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
           onClick={handleSortToggleByPrice}
          >
            Sort By Price 
            {isSortedByPrice && (
              <span style={{color: 'white', fontWeight: '500', marginBottom: '30px', marginLeft: '10px'}} onClick={(e) => e.stopPropagation()}>
                x
              </span>
            )}
          </button>
          <button
           style={{
            backgroundColor: isSortedByRatings ? '#E03546' : 'white',
            color: isSortedByRatings ? 'white' : 'gray',
            padding: '0.2vw 1.6vw',
            border: '1px solid gray',
            borderRadius: '10px',
            marginBottom: '2vw',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
          onClick={handleSortToggleByRatings}
          >
            Sort By Popularity 
            {isSortedByRatings && (
              <span 
               style={{color: 'white', fontWeight: '500', marginBottom: '30px', marginLeft: '10px'}}
               onClick={(e) => e.stopPropagation()}>
               x
              </span>
            )}
          </button>
        </div>
        {categories.map((category) => (
          <div key={category} style={{padding: '2vw'}}>
            <h2 style={{marginLeft: '4vw',textTransform: 'uppercase'}}>{category}</h2>
            <div className='prod-container'>
              {groupedProducts[category].map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <ProductListing
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                  ratings={product.ratings}
                />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
};

export default Category;