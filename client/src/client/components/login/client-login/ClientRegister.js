import React, { useState } from 'react'
import axios from "axios";
import Validation from '../../../components/protection/Validation';

import '../../../style/component/ClientLogin.css'
// import { useNavigate } from 'react-router-dom';

export const ClientRegister = () => {
    const [values, setValues] = useState({
            name: '',
            lastname: '',
            email: '',
            password: '',
    })

    const [errors, setErrors] = useState({})
    // const navigate = useNavigate();

    function handleInput(event) {
        const {name, value} = event.target;
        setValues((prev) => {
            return { ...prev, [name]: value }
        });
        console.log(values)
    }
      
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validez les champs
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        // Si aucune erreur de validation, soumettez les données
        if (Object.keys(validationErrors).length === 0) {
            // Effectuez l'appel axios.post ici
            axios.post("http://localhost:4000/client/create", values)
                .then(result => {
                    alert("Vous avez bien soumis le formulaire")
                    console.log(result);
                    window.location.reload();
                })
                .catch(err => console.log(err));
        }
        
    }
  return (
    <div>
        <div className="logincontainer">

            <form action="" 
            className="fromestyle"
            method='POST'
            onSubmit={handleSubmit}>

                <h4>Créer un compte</h4>

                <input type="text"
                placeholder='name'
                name='name'
                onChange={handleInput}
                />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}

                <input type="text"
                placeholder='lastname'
                name='lastname'
                onChange={handleInput}
                />
                {errors.lastname && <p style={{color: "red"}}>{errors.lastname}</p>}

                <input type="text"
                placeholder='email'
                name='email'
                onChange={handleInput}
                />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                <input type="text"
                placeholder='password'
                name='password'
                onChange={handleInput}
                />
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

                 <button type='submit'>Soumettre</button>

                 <div className="createaccount">
                    <p>Vous avez déja un compte ? </p>
                    <a className='register' href="/clientlogin">Se connecter</a>
                </div>

                <a href="/">Retour</a>
            </form>
        </div>
    
    </div>
  )
}