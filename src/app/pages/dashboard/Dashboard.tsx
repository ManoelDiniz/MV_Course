import React from "react";
import { useNavigate } from "react-router-dom";
import image from '../../images/971.png'
import { Header } from "../../components/Header";
import {Container, TextContent, Title, TitleHighlight} from './style'
import Button from "../../components/button";
import './style.css'

export const Dashboard: React.FC = () => {
  const history = useNavigate();

  const handleStartNowClick = () => {
    // Redireciona para a tela de login
    history("/login");
  };

  return (
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
        </div>
      </Container>
    </>
  );
};
