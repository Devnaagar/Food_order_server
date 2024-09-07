import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './admin/login/pagelogin';
import SideBar from './admin/defaults/sideBar';
import Landing_page from './admin/dashboard/landing_page';
import User from './admin/dashboard/user/user.jsx';
import Header2 from './admin/defaults/nav';
import PrivateRoute from './Private.jsx';
import User_list from './admin/dashboard/user/list_user.jsx';
import Meal from './admin/dashboard/mealtype/addmeal.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Login />}/>
          <Route path="/dashboard" element={<PrivateRoute element={<SideBar><Header2/><Landing_page /></SideBar>} />}/>
          <Route path="/user/add" element={<PrivateRoute element={<SideBar><Header2/><User /></SideBar>} />}/>
          <Route path="/user/list" element={<PrivateRoute element={<SideBar><Header2/><User_list /></SideBar>} />}/>
          <Route path="/meal" element={<PrivateRoute element={<SideBar><Header2/><Meal/></SideBar>} />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
