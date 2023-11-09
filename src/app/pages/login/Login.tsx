import React from "react";
import { MdLock, MdEmail } from 'react-icons/md';
import { Header } from "../../components/Header";
import { Container, Title, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './style';
import Button from "../../components/button";
import { Input } from "../../components/Input";
import './style.css'
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate()
  const HaddleCreateUser = () => {
    navigate('/register')
  }
  return (
    <>
      <Header />
      <Container>
        <div className="Form-Container">
          <Title>
          O seu trampolim para o domínio das principais tecnologias e a entrada acelerada nas empresas mais cobiçadas. Desperte o seu sucesso com nossa plataforma.
          </Title>
         
        </div>

        <div className="Form-Login">
            <Wrapper>
              <TitleLogin> Faça seu cadastro</TitleLogin>
              <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
              <form>
                <Input placeholder='Email' leftIcon={<MdEmail className="icons" />} />
                <Input placeholder='Senha' type="password" leftIcon={<MdLock className="icons"/>} />
                <Button title="Entrar" variant="secondary"/>

              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText onClick={HaddleCreateUser}> Criar conta</CriarText>
              </Row>
            </Wrapper>
        </div>

      </Container>
    </>
  );
};
