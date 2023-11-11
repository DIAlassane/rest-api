import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../style/Users.css';
export const UtilsateursCard = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/users')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/users/'+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }

  return (
    <div>
        <div className='usersgrid'>
        {
                    users.map((user) => {
                        return (
                        <div className='userscard'>
                            <p>role : {user.role}</p>
                            <p>nom : {user.name}</p>
                            <p>prenom : {user.firstname}</p>
                            <p>email : {user.email}</p>
                            <p>mdp : {user.password}</p>
                            <div>
                                <Link className='btnedit' to={`/updateUser/${user.user_id}`}>MAJ</Link>
                                <button className='delete' onClick={(e) => handleDelete(user.user_id)}>
                                    Supprimer
                                </button>
                            </div>
                        </div>)
                    })
                    }
    </div>
    </div>
  )
}
