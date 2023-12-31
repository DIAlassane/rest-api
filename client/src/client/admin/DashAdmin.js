import React from 'react'
import { Performance } from './composants/Performance'
import { EtatProduit } from './composants/EtatProduit'
import { AccordionNav } from '../components/AccordionNav'

import '../style/admin/DashAdmin.css'

function DashAdmin() {
  return (
    <div>
        <AccordionNav/>
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