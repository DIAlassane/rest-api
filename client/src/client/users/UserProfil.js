import React from 'react'
import { BtnLogOut } from '../components/login/BtnLogout'
import { Navbar } from '../components/nav-footer/Navbar'
import { EditProfile } from './components/EditProfile'

function UserProfil() {
  return (
    <div>
      <Navbar />
      <EditProfile />
      <BtnLogOut />
    </div>
  )
}

export default UserProfil