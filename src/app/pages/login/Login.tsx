import React, { useCallback, useRef, useState } from 'react';
import { InputLogin } from './components/InputLogin';
import { ButtonLogin } from './components/ButtonLogin';
import './components/inputLogin.css';
import mvCourseImage from './Mv_course.png';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../shared/services/api/ApiConfig';


export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [login, setlogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  function exibirMensagemErro(){
    const messageerror = document.getElementById('messageError')
    if(messageerror){
      messageerror.style.display ='block'
    }
    }
  
  

  const HanddleLogin = useCallback(() => {
    const data = {
      login: login,
      password: password
    };
    
  
    Api().post('/login', data)
      .then((Response) => {
        if (Response.data) {          
          navigate('/pagina-inicial')
        } 
      })
      .catch((error) => {
        exibirMensagemErro()
      });
  }, [login, password, navigate]);
  
  const HaddleRegister = () =>{
    return(
      navigate('/register')
    )
  }
  console.log(login)
  console.log(password)
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
              value={login}
              onChange={(newValue) => setlogin(newValue)}
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
            <ButtonLogin type="button" onClick={HanddleLogin}>
            Entrar
            </ButtonLogin>
            <div className='Button-register'>
              <h3 className='Label-register'>Ainda não tem um cadastro realize agora !</h3>
              <p/>
              <ButtonLogin type="button" className='Button' onClick={HaddleRegister}>
                  Cadastrar
              </ButtonLogin>
            </div>
            <label  
            id="messageError"
            className="oculto"
            >
              Usuario ou senha incorreto
            </label>
            <label
            id='userNull'
            className="ocultoLogin">
              Por favor insira seu usuario
            </label>
            <label
            id='passNull'
            className='ocultoPass'
            >
            Por favor insira sua senha 
            </label>
            
          </div>

        
        </form>
      </div>
    </body>
  );
};
