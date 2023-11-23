import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../protection/AuthContext";
import { BtnLogOut } from "../login/BtnLogout";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

import "./Navbar.css";

export const Navbar = () => {
  // const userRole = localStorage.getItem('user');
  const { currentUser } = useContext(AuthContext);
  const productData = useSelector((state) => state.bazar.productData);

  if (currentUser) {
    if (currentUser?.role === "admin") {
      return (
        <div className="navbar">
          <h2>Logo Entreprise</h2>
          <ul>
            <li>
              <Link to="/dashadmin">Dashboard</Link>
            </li>
            <li>
              <Link to="/allusers">Utilisateurs</Link>
            </li>
            <li>
              <Link to="/">Page 3 a</Link>
            </li>
            <li>
              <BtnLogOut />
            </li>
            <li>{currentUser?.name}</li>
            {/* Ajoutez d'autres liens pour le rôle d'admin */}
          </ul>
        </div>
      );
    } else if (currentUser?.role === "employer") {
      return (
        <div className="navbar">
          <h2>Logo Entreprise</h2>
          <ul>
            <li>
              <Link to="/dashemployer">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Page B</Link>
            </li>
            <li>
              <Link to="/">Page C</Link>
            </li>
            <li>
              <BtnLogOut />
            </li>
            <li>{currentUser?.name}</li>
            {/* Ajoutez d'autres liens pour le rôle d'employé */}
          </ul>
        </div>
      );
    } else if (currentUser === null) {
      // Navbar par défaut (pas de rôle ou rôle non défini)
      return (
        <div className="navbar">
          <h2>Logo Entreprise</h2>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <BtnLogOut />
            </li>
            <Link to="/cart">
              <div className="cart">
                <CiShoppingCart />
                <span>{productData.length}</span>
              </div>
            </Link>
            <li>{currentUser?.name}</li>
            {/* Ajoutez d'autres liens pour la navbar par défaut */}
          </ul>
        </div>
      );
    }
  }
};
