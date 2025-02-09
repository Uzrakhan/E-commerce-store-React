import React from 'react';
import products from '../products';
import ProductListing from './ProductListing';

const Category = () => {
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
};

export default Category;