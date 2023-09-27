
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import {  Dashboard, Login, Register } from "../pages";






const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route  path="/pagina-inicial"   element={<Dashboard />}/>
        <Route  path="/login"   element={<Login />}/>
        <Route path="/register" element={ <Register /> } />

        <Route path="*" Component={() => <Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
