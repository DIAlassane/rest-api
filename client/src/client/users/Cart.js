import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./components/CartItem";
import ClientNavbar from "../components/nav-footer/ClientNavbar";
import { AuthContext } from "../components/protection/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import StripeCkeckout from 'react-stripe-checkout';

export const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const [totalAmt, setTotalAmt] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    if (currentUser) {
        setPayNow(true);
    } else {
        toast.error('Connecter vous pour procéder au paiement');
    }
  };

  return (
    <div>
        <ClientNavbar />
      <div className="flex" style={{marginTop: '1.5rem',}}>
        <div style={{ width: "70%", }}>
          <CartItem />
        </div>

        <div className="rightcart" style={{ width: "30%", display: "block" }}>
          <div className="backcartitemright">
            <h2>Totals du panier</h2>
          </div>
          <p>
            Subtotal <span>{totalAmt} $</span>
          </p>
          <p>
            Shipping{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
              nostrum, ratione sit dolor nihil alias porro ipsam dolore illo eos
              iusto mollitia excepturi esse, molestiae praesentium vel magni
              ducimus? Optio?
            </span>
          </p>
          <hr />
          <p style={{
            fontSize: '1.15rem',
            fontWeight: '900',
          }}>
            Total <span style={{
                color: "green",
                fontWeight: '900',
                fontSize: '1.1rem',
            }}>{totalAmt} $</span>
          </p>
          <button
          onClick={handleCheckout}
          style={{
            padding: '.5rem',
            color: 'green',
            fontWeight: '700',
          }}
          >Ckeckout</button>
          {
            payNow && <div>
                <StripeCkeckout 
                stripeKey="pk_test_51OFcn7JyB9Z4
                mU088m3AQmFOpNKxFuq5WU8eR3LTvVaE
                QjKF6kVyMlbQDd1roK7cBkfU3CkR4b2t
                oddD38sfh3tn00yaLZImjL"
                name="Grocerie shop"
                amount={totalAmt * 100}
                label="Pay to grocerie"
                description={`Le total est de $${totalAmt}`}
                email={currentUser?.email}
                />
            </div>
          }
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
  );
};
