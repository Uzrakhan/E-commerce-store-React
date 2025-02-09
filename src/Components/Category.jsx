import React from 'react';
import products from '../products';
import ProductListing from './ProductListing';
import { Link } from 'react-router-dom';

const Category = () => {
  const categories = [...new Set(products.map((product) => product.category))];


    const groupByCategory = (items) => {
        return items.reduce((acc, product) => {
          if(!acc[product.category]) {
            acc[product.category] = [];
          }
    
          acc[product.category].push(product);
    
          return acc;
        }, {});
    };

    const groupedProducts = groupByCategory(products);

    /*
    return(
        <div>
            {Object.keys(groupedProducts).map((category) => (
                <div key={category}>
                    <h2 style={{textAlign: 'center', textDecoration: 'underline'}}>{category}</h2>
                    <div className='prod-container'>
                      {groupedProducts[category].map((product) => (
                       <ProductListing 
                        key={product.id} 
                        name={product.name} 
                        image={product.image} 
                        price={product.price} 
                        category={product.category}/>
            ))}
            </div>
          </div>
        ))}
        </div>
    )
    */

    return (
      <div>
        {categories.map((category) => (
          <div key={category} style={{padding: '2vw'}}>
            <h2 style={{marginLeft: '4vw',textTransform: 'uppercase'}}>{category}</h2>
            <div className='prod-container'>
              {products.filter((product) => product.category === category).map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <ProductListing 
                   name={product.name} 
                   image={product.image} 
                   price={product.price} 
                   category={product.category}
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