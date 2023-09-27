import { Link } from "react-router-dom";
import { Logout, useUsuarioLogado  } from "../../shared/hoocks";



export const Dashboard = () => {
 
  return (
    <div>
        <p>Dashboard</p>   
        
        <Link to={'/login'}> Login</Link>  
         <Logout />
    </div>     
     );
}