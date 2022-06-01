import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Users/Register/Register';
import PublicLandingPage from './screens/PublicLandingPage';
import Login from './pages/Users/Login/Login';
import React, { Component } from "react";
import './App.css';
import LoginAdmin from './pages/Admin/Login/LoginAdmin';
import Dashboard from './pages/Admin/Login/Dashboard';
import ErrorPage from './pages/Users/ErrorPage/ErrorPage';
import AkunUser from './pages/Users/Akun/AkunUser';
import UserLandingPage from './screens/UserLandingPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
              <Route path="/*" element={<PublicLandingPage />}/>
              <Route path="/admin" element={<LoginAdmin />}/>
              <Route path="/admin/dashboard" element={<Dashboard />}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/error' element={<ErrorPage/>}/>
              <Route path='/user/akun' element={<AkunUser/>}/>
              <Route path='/user' element={<UserLandingPage/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
