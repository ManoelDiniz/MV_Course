
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import {  Dashboard, Login, Register } from "../pages";
import { ConfigUser } from "../pages/config/config";






const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route  path="/pagina-inicial"   element={<Dashboard />}/>
        <Route  path="/login"   element={<Login />}/>
        <Route path="/register" element={ <Register /> } />

        <Route path="*" Component={() => <Navigate to="/login" />} />
        <Route path='/config' element={<ConfigUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
