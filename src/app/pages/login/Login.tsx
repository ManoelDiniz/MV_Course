import React, { useCallback, useState } from "react";
import { MdLock, MdEmail } from 'react-icons/md';
import { Header } from "../../components/Header";
import { Container, Title, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper } from './style';
import Button from "../../components/button";
import { Input } from "../../components/Input";
import './style.css'
import { Api } from "../../shared/services/api/ApiConfig"
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [ Login, setLogin ] = useState('')
  const [ Senha, setPass ] = useState('')  
  const navigator = useNavigate()
  const HaddleCreateUser = () => {
    navigator('/register')
  }
  const HanddleLogin = useCallback(()=>{
    const data ={
      login: Login,
      password: Senha,
      
    }
    Api().post('/login', data)
      .then((Response) => {
        if (Response.data) {
          console.log("passa por aqui")
          navigator('/feed')
      }      
    })
    .catch((error) => {
      console.log("passou aqui 003")
      alert('Login ou senha incorreto');
    });
  },[Login,Senha, navigator])
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
                <Input 
                placeholder='Email' 
                leftIcon={<MdEmail className="icons" />}
                onChange={(newValue) =>setLogin(newValue)}
                 />
                <Input onChange={(newValue) =>setPass(newValue)} placeholder='Senha' type="password" leftIcon={<MdLock className="icons"/>} />
                <Button title="Entrar" onClick={HanddleLogin} variant="secondary"/>

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
