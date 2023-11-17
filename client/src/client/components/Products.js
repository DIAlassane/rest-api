import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../api/Api';

import '../style/component/Products.css';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [dataProduct, setDataProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productsData();
        setDataProduct(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataProduct]);
    
  return (
    <div className='productcontainer'>
        <div className="btnexplained">
            <h1>Shopping everyday</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate assumenda voluptatum velit vitae libero, quibusdam aliquam veniam cum ab nihil officia eligendi esse a nostrum praesentium odio atque asperiores vero.</p>
        </div>
        <div className="productcard">
            {
                dataProduct.map((item) => (
                    <ProductsCard key={item._id} product={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products