import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { CartItem } from './components/CartItem';

export const Cart = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const [totalAmt, setTotalAmt] = useState("");

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity;
            return price
        });
        setTotalAmt(price.toFixed(2));
    }, [productData])
  return (
    <div>
        <div>
            <div>
            <CartItem />
            </div>

            <div className="rightcart">
                <div className="backcartitemright">
                    <h2>Totals du panier</h2>
                </div>
                <p>
                    Subtotal{" "}
                    <span>
                        {totalAmt} $
                    </span>
                </p>
                <p>
                    Shipping{" "}
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero nostrum, ratione sit dolor nihil alias porro ipsam dolore illo eos iusto mollitia excepturi esse, molestiae praesentium vel magni ducimus? Optio?
                    </span>
                </p>
                <hr />
            </div>
            <p>
                Total <span>{totalAmt} $</span>
            </p>
            <button>Ckeckout</button>
        </div>
    </div>
  )
}
