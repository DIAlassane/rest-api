import React from 'react'

import '../style/component/Products.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice';
import { ToastContainer, toast } from 'react-toastify';

const ProductsCard = ({product}) => {
    const dispatch = useDispatch();
    const _id = product.title;
    const idString =(_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/product/${rootId}`, {
            state: {
                item: product,
            },
        });
    };
    
  return (
    <div className="group">
        <div 
        onClick={handleDetails}
        className='productcardcont'>
            <img 
            className='imgpcc' 
            src={product.image} 
            alt="" />
        </div>
        <div className="infocard">
            <div className="cardproinfo">
                <div className="title">
                    <h6>{product.title.substring(0, 15)}</h6>
                </div>
                <div className="globalprice">
                    <div className="price">
                        <p>{product.oldPrice}$</p>
                        <p>{product.price}$</p>
                    </div>
                    <div className="addcart">
                        <p onClick={() => dispatch(
                            addToCart({
                                _id: product._id,
                                title: product.title,
                                image: product.image,
                                price: product.price,
                                quantity: 1,
                                description: product.description,
                        })
                        ) & toast.success(`${product.title} is added`)
                        }>ajouter{" "}</p>
                    </div>
                </div>
            </div>
            <div className="category">
                <p>{product.category}</p>
                <div> { product.isNew && <p>Sale</p> }
            </div>
            </div>
        </div>
        <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </div>
  )
}

export default ProductsCard