import React, { useContext } from 'react'
import { CiShoppingCart } from "react-icons/ci";


import '../../../App.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthContext } from '../protection/AuthContext';
import { BtnLogOut } from '../login/BtnLogout';

const ClientNavbar = () => { 
    const { currentUser } = useContext(AuthContext);
    const productData = useSelector((state) => state.bazar.productData);

    return (
        <div className="navbar">
        <h2>Logo Entreprise</h2>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to='/'>contact</Link>
          </li>
          <li>
            <BtnLogOut />
          </li>
          <Link to="/cart">
            <div className="cart">
              <CiShoppingCart />
              {currentUser && <span>{productData.length}</span>}
            </div>
          </Link>
          <li>{currentUser?.name}</li>
          <li>
            <Link to='/clientlogin'>Connexion</Link> 
          </li>        
          {/* Ajoutez d'autres liens pour la navbar par défaut */}
        </ul>
      </div>
  )
}

export default ClientNavbar