import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import HomeClient from './client/users/HomeClient';
import { Login } from './client/components/login/Login';
import { Router } from './client/components/protection/Router';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomeClient />} ></Route>
    <Route path='/login' element={<Login />} ></Route>
    <Route path='/router' element={<Router />} ></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
