import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IoMdClose } from "react-icons/io";
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from '../../../redux/slice';
import { ToastContainer, toast } from 'react-toastify';
import { HiArrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';


export const CartItem = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const dispatch = useDispatch();

  return (
    <div>
        <div>
            <h2>Panier</h2>
        </div>
        <div>
            {
                productData.map((item) => (
                    <div key={item._id}>
                        <div>
                            <IoMdClose 
                            onClick={() => dispatch(deleteItem(item._id)) & toast.error }
                            />
                            <img 
                            src={item.image} 
                            alt="" />
                        </div>
                        <h2>{item.title}</h2>
                        <div className="plusoumoins">
                <div>
                    <button
                    onClick={() => 
                        dispatch(
                            decrementQuantity({
                                _id: item._id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                                description: item.description,
                            })
                            )}
                    >-</button>
                    <p>Quantity <span>{item.quantity}</span></p>
                    <button 
                    onClick={() => 
                        dispatch(
                            increamentQuantity({
                                _id: item._id,
                                title: item.title,
                                image: item.image,
                                price: item.price,
                                quantity: 1,
                                description: item.description,
                            })
                    )} 
                    >+</button>
                </div>
                <p>{item.quantity * item.price}$</p>
            </div>
            <p>{item.price}</p>
            </div>
                ))
            }
        </div>
        <button
        onClick={() => dispatch(resetCart()) & toast.error("Le panier est vide")}
        >Tout supprimer</button>
        <Link to='/'>
            <span>
                <HiArrowLeft />
            </span>
            retour à l'acceuil
        </Link>
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
