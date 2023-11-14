import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../protection/AuthContext';
import { BtnLogOut } from '../login/BtnLogout';

import './Navbar.css'

export const Navbar = () => {
    // const userRole = localStorage.getItem('user');
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        if(currentUser?.role === 'admin') {
        return (
            <div className='navbar'>
                <h2>Logo Entreprise</h2>
                <ul>
                    <li><Link to="/dashadmin">Dashboard</Link></li>
                    <li><Link to="/allusers">Utilisateurs</Link></li>
                    <li><Link to="/">Page 3 a</Link></li>
                    <li><BtnLogOut /></li>
                    <li>{currentUser?.name}</li>
                    {/* Ajoutez d'autres liens pour le rôle d'admin */}
                </ul>
            </div>
        );
    } else if (currentUser?.role === 'employer') {
        return (
            <div className='navbar'>
                <h2>Logo Entreprise</h2>
                <ul>
                    <li><Link to="/dashemployer">Dashboard</Link></li>
                    <li><Link to="/">Page B</Link></li>
                    <li><Link to="/">Page C</Link></li>
                    <li><BtnLogOut /></li>
                    <li>{currentUser?.name}</li>
                    {/* Ajoutez d'autres liens pour le rôle d'employé */}
                </ul>
            </div>
        );
    } else if (!currentUser) {
        // Navbar par défaut (pas de rôle ou rôle non défini)
        return (
            <div className='navbar'>
                <h2>Logo Entreprise</h2>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/login">Se connecter</Link></li>
                    <li></li>
                    {/* Ajoutez d'autres liens pour la navbar par défaut */}
                </ul>
            </div>
        );
    }}
};
