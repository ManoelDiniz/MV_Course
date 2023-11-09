import React from "react";
import image from '../../images/971.jpg'
import { Header } from "../../components/Header";
import {Container,TextContent,Title,TitleHighlight} from './style'
import Button from "../../components/button";
import './style.css'
import { Card } from "../../components/Card";

export const Feed: React.FC = () => {

  return (
    <>
      <Header />
      <Container>
        <Card />
      </Container>
      
    </>
  );
};
