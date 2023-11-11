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

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
    <Routes>
    <Route path='/' element={<HomeClient />} ></Route>
    <Route path='/login' element={<Login />} ></Route>
    <Route path='/router' element={<Router />} ></Route>
    <Route path='/dashemployer' element={<DashEmployer />} ></Route>
    <Route path='/dashadmin' element={<DashAdmin />} ></Route>
    <Route path='/userprofil' element={<UserProfil />} ></Route>
    <Route path='/allusers' element={<Utilisateurs />} ></Route>
    </Routes>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
