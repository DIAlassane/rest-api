import React from 'react'
import { BtnLogOut } from '../components/login/BtnLogout'

function DashAdmin() {
  return (
    <div>
        DashAdmin
        <a href="/allusers">tous les utilisateurs</a>
        <BtnLogOut />
    </div>
  )
}

export default DashAdmin