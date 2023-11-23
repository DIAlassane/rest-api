import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../../../redux/slice";
import { ToastContainer, toast } from "react-toastify";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

import "../../style/component/CartItem.css";

export const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const dispatch = useDispatch();

  return (
    <div className="contcartitem">
      <div className="cartitemtitle">
        <h2>Panier</h2>
      </div>
      <div className="mapcartitem">
        {productData.map((item) => (
          <div key={item._id} className="cartitemcontainer">
            <div className="cartitemleft">
              <IoMdClose
                onClick={() => dispatch(deleteItem(item._id)) & toast.error}
                style={{
                    color: 'red', 
                    marginRight: '1rem', 
                    cursor: 'pointer',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: "center",
                }}
              />
              <img src={item.image} alt="" />
            </div>
            <h2
            style={{
                justifyContent: 'left',
                marginTop: '2.5rem',
            }}
            >{item.title.substring(0, 10)}</h2>
            <div className="plusoumoins">
              <div 
              style={{
                border: '1px solid black', 
                display: 'flex',
            }}
              >
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
                    )
                  }
                  style={{
                    border: 'none',
                    color: 'red',
                    fontSize: '2rem',
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                >
                  -
                </button>
                <p style={{
                    fontSize: '1.2rem', 
                    marginLeft: '.5rem', 
                    marginRight: '.5rem',
                    }}>
                  Quantity <span>{item.quantity}</span>
                </p>
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
                    )
                  }
                  style={{
                    border: 'none',
                    color: 'green',
                    fontSize: '2rem',
                    fontWeight: 900,
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
              <p 
              style={{
                fontWeight: '900',
              }}
              >{item.quantity * item.price}$</p>
            </div>
            <p style={{color: 'grey',}}>{item.price}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Le panier est vide")
        }
        style={{
            padding: '.3rem',
            color: 'white',
            backgroundColor: 'red',
            border: 'none',
            borderRadius: '4px',
            margin: '1rem',
            fontSize: '1.1rem',
        }}
      >
        Tout supprimer
      </button>
      <Link to="/"
      style={{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: 'darkgrey',
        display: "flex",
        alignItems: "center",
        width: '20%',
        marginLeft: '1rem',
      }}
      >
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
  );
};
