<<<<<<< HEAD
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './components/dashboard.css'
import mvCourseImage from './Mv_course.png';
import { FaBell } from "react-icons/fa"
import Programacao from './components/programacao.jpeg';
import Programacao02 from './components/programacao02.jpeg';
import Programação03 from './components/programacao03.jpeg'
=======
import React from "react";
import { useNavigate } from "react-router-dom";
import image from '../../images/971.png'
import { Header } from "../../components/Header";
import {Container, TextContent, Title, TitleHighlight} from './style'
import Button from "../../components/button";
import './style.css'
>>>>>>> 8c823f2c605e4f0aec88d4b4eb50d1d5c20dfb0a

export const Dashboard: React.FC = () => {
  const history = useNavigate();

<<<<<<< HEAD
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    Programacao,
    Programacao02,
    Programação03,
  ];

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
=======
  const handleStartNowClick = () => {
    // Redireciona para a tela de login
    history("/login");
>>>>>>> 8c823f2c605e4f0aec88d4b4eb50d1d5c20dfb0a
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
<<<<<<< HEAD
    <body>
      <img src={images[currentImageIndex]} alt="MV Course" className="ProgramacaoPhoto" />
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
        <button onClick={handlePrevImage} className="ButtonPhoto">Anterior</button>

        <button onClick={handleNextImage} className="ButtonPhoto">Próxima</button>
        
      </div>

      
      {isNotificationOpen && (
        <div className="Notification">
          
          <p>Você tem uma nova notificação!</p>
          <button onClick={handleNotificationClick}>Fechar</button>
=======
    <>
      <Header />
      <Container>
        <div className="Form-Container">
          <Title>
            <TitleHighlight>
            Transforme seu potencial em realidade agora mesmo. 
            <br/>
            Desperte o global que há em você
            </TitleHighlight>
          </Title>
          <TextContent>
            Venha aprender utilizando as tecnologias utilizadas pelas empresas mais inovadoras do mundo.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleStartNowClick} />
        </div>

        <div>
          <img src={image} alt="Imagem principal" className="ImageP" />
>>>>>>> 8c823f2c605e4f0aec88d4b4eb50d1d5c20dfb0a
        </div>
      </Container>
    </>
  );
};
