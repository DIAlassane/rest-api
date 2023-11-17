import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoStarSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

import '../style/component/Products.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice';

const SingleProduct = () => {
    const [details, setDetails] = useState({});
    const [baseQty, setBaseQty] = useState(1);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        setDetails(location.state.item);
    }, []);

  return (
    <div>
        <div className="groupdetailsproduct">
            <div className="imgdetailsproduct">
                <img src={details.image} alt="" />
                <div> { details.isNew && <p>Sale</p> } </div>
            </div>
        </div>
        <div className="detailsproductright">
            <div>
                <h2>{details.title}</h2>
                <div>
                    <p>{details.oldPrice}</p>
                    <p>{details.price}</p>
                </div>
            </div>
            <div>
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <p>(1 review)</p>
            </div>
            <div>
                <p>{details.description}</p>
            </div>
            <div className="plusoumoins">
                <div>
                    <button
                    onClick={() => setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)}>-</button>
                    <p>Quantity <span>{baseQty}</span></p>
                    <button 
                    onClick={() => setBaseQty(baseQty + 1)} >+</button>
                </div>
            </div>
            <button
            onClick={() => dispatch(
                addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
            })
            ) & toast.success(`${details.title} is added`)
        }
            >ajouter</button>
            <div>
                <p>Category: {details.category}</p>
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

export default SingleProduct