import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './admin/login/pagelogin';
import SideBar from './admin/defaults/sideBar';
import Landing_page from './admin/dashboard/landing_page';
import User from './admin/dashboard/user';
import Header2 from './admin/defaults/nav';
import PrivateRoute from './Private.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Login />}/>
          <Route path="/dashboard" element={<PrivateRoute element={<SideBar><Header2/><Landing_page /></SideBar>} />}/>
          <Route path="/user/add" element={<PrivateRoute element={<SideBar><Header2/><User /></SideBar>} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
