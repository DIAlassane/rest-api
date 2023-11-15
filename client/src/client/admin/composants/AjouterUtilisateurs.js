import React, { useState } from 'react'
import axios from "axios";

import '../../style/admin/UpdateUser.css'

export const AjouterUtilisateurs = () => {
    const [values, setValues] = useState({
            role: '',
            name: '',
            firstname: '',
            email: '',
            password: '',
    })

    function handleInput(event) {
        const {name, value} = event.target;
        setValues((prev) => {
            return { ...prev, [name]: value }
        });
    }   
      
      const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:4000/users/create`, values)
        .then(result => {
          console.log(result)
          window.location.reload();
        })
        .catch(err => console.log(err))
      }  
  return (
    <div>
        <div className="">
            <hr />
            <form action="" 
            className="formstyle update"
            onSubmit={handleSubmit}>

                <h4>Ajouter un Utilisateur</h4>

                <input type="text"
                placeholder='role'
                name='role'
                onChange={handleInput}
                />

                <input type="text"
                placeholder='name'
                name='name'
                onChange={handleInput}
                />

                <input type="text"
                placeholder='firstname'
                name='firstname'
                onChange={handleInput}
                />

                <input type="text"
                placeholder='email'
                name='email'
                onChange={handleInput}
                />

                <input type="text"
                placeholder='password'
                name='password'
                onChange={handleInput}
                />

                 <button>Soumettre</button>
            </form>
        </div>
        <hr />
    </div>
  )
}