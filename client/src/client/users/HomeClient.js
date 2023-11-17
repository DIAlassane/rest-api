import React from 'react';
import BannerSlider from '../components/BannerSlider';
import Products from '../components/Products';

function HomeClient() {
  
  return (
    <div>
      <BannerSlider />
      <Products />
      <a href="/login"> Login </a>
      <div>
        <a href="/clientlogin"> clientLogin </a>
      </div>
    </div>
  );
}

export default HomeClient;
