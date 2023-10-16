import React, {  useState, } from "react";
import { Link, Outlet } from "react-router-dom";
import './components/dashboard.css'
import mvCourseImage from './Mv_course.png';
import { FaBell, FaUser  } from "react-icons/fa"


export const Dashboard: React.FC = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isConfignOpen, setIsConfigOpen] = useState(false)

  

  const handleConfigClick = () => {
    setIsConfigOpen(!isConfignOpen);
  }

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
          </Link>
          <Link to='/pagina-inicial' className="Reload">
            Cursos
          </Link>
          <Link to='/pagina-inicial' className="Reload">
            Artigos
          </Link>
          <Link to='/pagina-inicial' className="Reload">
            Divulgações
          </Link>
          <Link to='/pagina-inicial' className="Reload">
            Configurações
          </Link>
          
        </nav>
        <Outlet />
        <div className="Bell" onClick={handleNotificationClick}>
          <FaBell size={32} color="blue" />
        </div>
        <div className="config">
          <FaUser size={32} color='blue' onClick={handleConfigClick} />
        </div>
      </div>

      {isNotificationOpen && (
        <div className="Notification">
          <p>Você tem uma nova notificação!</p>
          <button onClick={handleNotificationClick}>Fechar</button>
        </div>
      )}
      {isConfignOpen && (
        <div className="Config">
          
          <Link to='/config' className="configuration">
            Configuração
          </Link>
          <Link to='/login' className="configuration">
            Logout
          </Link>
        </div>
      )}
    </body>
  );
};
