import React from 'react'
import { CiShoppingCart } from "react-icons/ci";


import '../../../App.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ClientNavbar = () => { 
    const productData = useSelector((state) => state.bazar.productData);

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
            <Link to='/cart'>
            <div className="cart">
                <CiShoppingCart />
                <span>{productData.length}</span>
            </div>
            </Link>
            <Link to='/clientlogin'>
            <img className='imgnavprofile' src="https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg" alt="photoprofile" />
            </Link>
        </div>
        </div>
    </div>
  )
}

export default ClientNavbar