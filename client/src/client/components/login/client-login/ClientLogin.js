import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaGooglePlus } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    signOut, 
} from "firebase/auth";

import '../../../style/component/ClientLogin.css';
import { Navbar } from '../../nav-footer/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../../redux/slice';

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

    const dispatch = useDispatch();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = (e) => {
        e.preventDefault();
    
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            dispatch(
                addUser({
                    _id: user.uid,
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL,
                })
            );
            setTimeout(() => {
                navigate('/userprofil');
            });
        })
        .catch((error) => {
            console.log("Error during Google login:", error);
            toast.error("Erreur lors de la connexion avec Google");
        });
    };
    

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            toast.success("Deconnection reussi");
            // dispatch(removeUser());
        })
        .catch((error) => {
            console.log(error);
        });
    };

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
            {loginInfo}
            <a href="/"> retour</a>
        </form>
        <div>
                <div onClick={handleGoogleLogin}>
                    <FaGooglePlus />
                    <span>Se connecter avec google</span>
                </div>
                <div>
                    <FaGithub />
                    <span>Se connecter avec Github</span>
                </div>
                <button
                onClick={handleSignOut}
                >Deconnection</button>
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
    </>
  )
}