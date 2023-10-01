import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './components/dashboard.css'
import mvCourseImage from './Mv_course.png';
import { FaBell } from "react-icons/fa"

export const Dashboard: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <body>
      <div className="Options">
          <nav>
              <img src={mvCourseImage} alt="MV Course" />
              <Link to='/pagina-inicial' className="Reload">
                Pagina Inicial
              </Link >
                
                 
              <Link to='/pagina-inicial'  className="Reload">
                Cursos
              </Link > 
              <Link to='/pagina-inicial'  className="Reload">
                Artigos
              </Link> 

              <Link to='/pagina-inicial'  className="Reload">
                Divulgações
              </Link >      
              <Link to='/pagina-inicial'  className="Reload">
                Configurações
              </Link >    
              <Link to='/login' className="Reload">
                Logout
              </Link >
              
          </nav>
        <Outlet />
        <div className="Bell" onClick={handleNotificationClick}>
          <FaBell size={32} color="blue" />
        </div>
        
      </div>

      
      {isNotificationOpen && (
        <div className="Notification">
          {/* Conteúdo da notificação */}
          <p>Você tem uma nova notificação!</p>
          <button onClick={handleNotificationClick}>Fechar</button>
        </div>
      )}
     
    </body>
  );
};
