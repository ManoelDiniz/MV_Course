
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route  path="/pagina-inicial"   element={<Dashboard />}/>
        <Route  path="/login"   element={<Login />}/>

        <Route path="*" Component={() => <Navigate to="/pagina-inicial" />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
