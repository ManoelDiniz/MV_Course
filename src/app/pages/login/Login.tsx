import React, { useCallback, useRef, useState } from 'react';
import { InputLogin } from './components/InputLogin';
import { ButtonLogin } from './components/ButtonLogin';
import './components/inputLogin.css';
import mvCourseImage from './Mv_course.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const HanddleEntrar = useCallback(() => {
    console.log(password);
    console.log(email);
  }, [password, email]);
  const HaddleRegister = () =>{
    return(
      navigate('/register')
    )
  }
  return (
    <body>
      <div className="container">
        <form>
          <div className='Left-login'>
              <h1>Bem Vindo ao MV Course<p/> Faça o login e venha conhecer outro mundo </h1>
          </div>
          
          <div className="input-group">
            <img src={mvCourseImage} alt="MV Course" />
            <InputLogin
              label="Login      "
              value={email}
              onChange={(newValue) => setEmail(newValue)}
              onPressEnter={() => inputPasswordRef.current?.focus()}
              className="input-login"
            />
            <InputLogin
              label="Senha     "
              value={password}
              onChange={(newValue) => setPassword(newValue)}
              type="password"
              className="input-pass"
              ref={inputPasswordRef}
            />
            <ButtonLogin type="button" onClick={HanddleEntrar}>
            Entrar
            </ButtonLogin>
            <div className='Button-register'>
              <h3 className='Label-register'>Ainda não tem um cadastro realize agora !</h3>
              <p/>
              <ButtonLogin type="button" className='Button' onClick={HaddleRegister}>
                  Cadastrar
              </ButtonLogin>
            </div>
            
          </div>

        
        </form>
      </div>
    </body>
  );
};
