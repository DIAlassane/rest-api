import React from 'react'
import { Navbar } from '../components/nav-footer/Navbar'
import { Performance } from './composants/Performance'

import '../style/admin/DashAdmin.css'
import { EtatProduit } from './composants/EtatProduit'

function DashAdmin() {
  return (
    <div>
        <Navbar />
        DashAdmin
        <div className="adminboard">
          <Performance />
        </div>
        <div className="etat">
          <EtatProduit />
        </div>
        <a href="/allusers">tous les utilisateurs</a>
    </div>
  )
}

export default DashAdmin