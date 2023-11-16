import React from 'react'

import '../style/component/Products.css';
import ProductsCard from './ProductsCard';

const Products = () => {
  return (
    <div className='productcontainer'>
        <div className="btnexplained">
            <h1>Shopping everyday</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda voluptatum velit vitae libero, quibusdam aliquam veniam cum ab nihil officia eligendi esse a nostrum praesentium odio atque asperiores vero.</p>
        </div>
        <div className="productcard">
            <ProductsCard />
        </div>
    </div>
  )
}

export default Products