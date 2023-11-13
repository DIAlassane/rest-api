import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const userRole = localStorage.getItem('userRole');

    if (userRole === 'admin') {
        return (
            <div>
                <ul>
                    <li><Link to="/">Page 1 a</Link></li>
                    <li><Link to="/">Page 2 a</Link></li>
                    <li><Link to="/">Page 3 a</Link></li>
                    {/* Ajoutez d'autres liens pour le rôle d'admin */}
                </ul>
            </div>
        );
    } else if (userRole === 'employer') {
        return (
            <div>
                <ul>
                    <li><Link to="/">Page A</Link></li>
                    <li><Link to="/">Page B</Link></li>
                    <li><Link to="/">Page C</Link></li>
                    {/* Ajoutez d'autres liens pour le rôle d'employé */}
                </ul>
            </div>
        );
    } else {
        // Navbar par défaut (pas de rôle ou rôle non défini)
        return (
            <div>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/login">Se connecter</Link></li>
                    {/* Ajoutez d'autres liens pour la navbar par défaut */}
                </ul>
            </div>
        );
    }
};
