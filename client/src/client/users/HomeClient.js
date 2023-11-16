import React from 'react'
import ClientNavbar from '../components/nav-footer/ClientNavbar'
import BannerSlider from '../components/BannerSlider'
import Products from '../components/Products'

function HomeClient() {
  return (
    <div>
        <ClientNavbar />
        <BannerSlider />
        <Products />
        <a href="/login"> Login </a>
        <div>
          <a href="/clientlogin"> clientLogin </a>
        </div>
        
    </div>
  )
}

export default HomeClient