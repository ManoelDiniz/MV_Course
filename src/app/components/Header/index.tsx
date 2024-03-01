import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button';
import logo from '../../pages/dashboard/Mv_course.png';
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from './styles';


export const Header = () => {
  const navigate = useNavigate();
  const HanddleLoginUser = ( ) => {
    navigate('/login')
  }
  const HanddleRegisterUser = () => {
    navigate('/register')
  }
  return (
    <Wrapper>
      <Container>
        <Row style={{left:'25px', position:'absolute'}}>
          <img src={logo} alt='Logo' style={{width:'45px'}} />
          <BuscarInputContainer>
            <Input placeholder='Buscar...' />
          </BuscarInputContainer>
          <Menu>Mv Course</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row style={{right:'15px', position:'absolute'}}>
          <MenuRight href='#'>Home</MenuRight>
          <Button title='Entrar' onClick={HanddleLoginUser} />
          <Button title='Cadastro' onClick={HanddleRegisterUser} />
        </Row>
      </Container>
    </Wrapper>
  );
};
