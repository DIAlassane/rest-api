import React from 'react'
import { BtnLogOut } from '../components/login/BtnLogout'
// import { Navbar } from '../components/nav-footer/Navbar'
import { EditProfile } from './components/EditProfile'
import ClientNavbar from '../components/nav-footer/ClientNavbar'

function UserProfil() {
  return (
    <div>
      <ClientNavbar />
      <EditProfile />
      <BtnLogOut />
    </div>
  )
}

export default UserProfil