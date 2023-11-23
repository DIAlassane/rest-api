import React from 'react'
import { Performance } from './composants/Performance'
import { EtatProduit } from './composants/EtatProduit'

import '../style/admin/DashAdmin.css'

function DashAdmin() {
  return (
    <div>
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