import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import '../../../style/component/ClientLogin.css';
import { Navbar } from '../../nav-footer/Navbar';

export const ClientLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginInfo, setLoginInfo] = useState("");

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/client/login", {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response.data)
            if (response.data.message) {
                setLoginInfo(response.data.message)
            } else {
                setLoginInfo(response.data[0].email);
                // Stockez l'objet utilisateur complet dans le localStorage
                localStorage.setItem('user', JSON.stringify(response.data[0]));
                navigate('/userprofil');
                window.location.reload()
                alert('reussi')
            }
        })
    }

  return (
    <>
    <Navbar />
    <div className='logincontainer'>
        <form className="fromestyle" method='POST'
        onSubmit={login}>
            <h1>Se connecter</h1>
            <input type="email" placeholder='email'
            name='email'
            onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" placeholder='password'
            onChange={(e) => {setPassword(e.target.value)}} />
                        
            <button>Se connecter</button>

            <div className="createaccount">
                <p>Vous n'avez pas de compte ? </p>
                <a className='register' href="/register">Créer un compte</a>
            </div>

            <a href="/"> retour</a>
        </form>
    </div>
    </>
  )
}