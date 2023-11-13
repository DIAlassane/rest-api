import React from 'react'
import { BtnLogOut } from '../components/login/BtnLogout'
import { Navbar } from '../components/nav-footer/Navbar'

function DashAdmin() {
  return (
    <div>
        <Navbar />
        DashAdmin
        <a href="/allusers">tous les utilisateurs</a>
        <BtnLogOut />
    </div>
  )
}

export default DashAdmin