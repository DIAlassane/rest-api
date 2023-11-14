import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios";

import '../../style/admin/UpdateUser.css'

export const UpdateUser = () => {
    const [values, setValues] = useState({
            role: '',
            name: '',
            firstname: '',
            email: '',
            password: '',
    })

    const navigate = useNavigate()
    const { id } = useParams();

    function handleInput(event) {
        const {name, value} = event.target;
        setValues((prev) => {
            return { ...prev, [name]: value }
        });
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/users`)
        .then(result => {
          console.log(result)
          setValues(result.data)
        })
        .catch(err => console.log(err))
      }, [])   
      
      const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4000/users/updateUser/${id}`, values)
        .then(result => {
          console.log(result)
          navigate('/allusers')
        })
        .catch(err => console.log(err))
      }  
  return (
    <div>
        <Link to='/allusers'>Retour</Link>
        <div className="">
            
            <form action="" 
            className="formstyle update"
            onSubmit={handleSubmit}>

                <h4>Mettre à jour</h4>

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
    </div>
  )
}