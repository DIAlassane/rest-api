import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

import '../../../App.css';

const ClientNavbar = () => {
  return (
    <div className='navcontainer'>
        <div className="insidecontainer">
        <div className='logo'>
            <a href="/">LOGO</a>
        </div>
        <div className='clientlinks'>
            <ul>
                <li>Acceuil</li>
                <li>shop</li>
                <li>element</li>
                <li>blog</li>
            </ul>
            <div className="cart">
                <CiShoppingCart />
                <span>0</span>
            </div>
            <img className='imgnavprofile' src="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg" alt="photoprofile" />
        </div>
        </div>
    </div>
  )
}

export default ClientNavbar