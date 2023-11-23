import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './client/components/protection/AuthContext';

import './App.css';
import HomeClient from './client/users/HomeClient';
import { Login } from './client/components/login/Login';
import { Router } from './client/components/protection/Router';
import DashEmployer from './client/employee/DashEmployer';
import DashAdmin from './client/admin/DashAdmin';
import UserProfil from './client/users/UserProfil';
import { Utilisateurs } from './client/admin/pages/Utilisateurs';
import { UpdateUser } from './client/admin/pages/UpdateUser';
import { ClientLogin } from './client/components/login/client-login/ClientLogin';
import { ClientRegister } from './client/components/login/client-login/ClientRegister';
// import ClientNavbar from './client/components/nav-footer/ClientNavbar';
import Footer from './client/components/nav-footer/Footer';
import SingleProduct from './client/components/SingleProduct';
import { Cart } from './client/users/Cart';
import { Navbar } from './client/components/nav-footer/Navbar';
// import productsData from './api/Api';

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Navbar />
    <Routes> 
    <Route path='/' element={<HomeClient />} ></Route>
    <Route path='/login' element={<Login />} ></Route>
    <Route path='/clientlogin' element={<ClientLogin />} ></Route>
    <Route path='/register' element={<ClientRegister />} ></Route>
    <Route path='/router' element={<Router />} ></Route>
    <Route path='/dashemployer' element={<DashEmployer />} ></Route>
    <Route path='/dashadmin' element={<DashAdmin />} ></Route>
    <Route path='/userprofil' element={<UserProfil />} ></Route>
    <Route path='/product/:id' element={<SingleProduct />} ></Route>
    <Route path='/cart' element={<Cart />} ></Route>
    <Route path='/allusers' element={<Utilisateurs />} ></Route>
    <Route path='/updateUser/:id' element={<UpdateUser />} ></Route>
    </Routes>
    <Footer />
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
