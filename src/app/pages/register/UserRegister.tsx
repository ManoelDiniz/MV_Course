import { useCallback, useState } from "react"
import { InputRegister } from "./components/InputUserRegister"
import './components/UserRegister.css'
import mvCourseImage from './components/Mv_course.png'
import { Api } from "../../shared/services/api/ApiConfig"
import { useNavigate } from "react-router-dom"


export const Register = () => {
  const [ Login, setLogin ] = useState('')
  const [ Name_user, setName_user ] = useState('')
  const [ Senha, setPass ] = useState('')  
  const [ Email, setEmail ] = useState('')
  const navigator = useNavigate()
  
  
  const HanddleRegister = useCallback(()=>{
    const data ={
      login: Login,
      password: Senha,
      name_user: Name_user,
      email_user: Email
    }
    Api().post('/register', data)
      .then((Response) => {
        if (Response.data) {
        alert('Registro Feito com sucesso')
        navigator('/login')
      }      
    })
    .catch((error) => {
      alert('Erro ao fazer o registro: Email Ja cadastrado');
    });
  },[Login,Senha,Name_user,Email, navigator])

  return(
    <body>
      <div className="input-register">
        <img src={mvCourseImage} alt="MV Course" />
        
        <h1>Tela de Cadastro</h1>
        <div className="Input-register2">
          < InputRegister 
            placehoder ='Login   '
            value= {Login}
            onChange={(newValue) =>setLogin(newValue)}
            className='InputRegister'
            />
            < InputRegister 
            placehoder ='Nome do usuario   '
            value= {Name_user}
            onChange={(newValue) =>setName_user(newValue)}
            className='InputRegister'
            />
            
            < InputRegister 
            placehoder ='Senha  '
            value= {Senha}
            type="password"
            onChange={(newValue) =>setPass(newValue)}
            className='InputRegister'
            />            
            < InputRegister 
            placehoder ='Email  '
            value= {Email}
            onChange={(newValue) =>setEmail(newValue)}
            className='InputRegister'
            />
        </div>
        
        <h3> Por favor Preencha todos os campos </h3>
        <button
        onClick={HanddleRegister}
        >Registrar</button>

      </div>
    </body>
  )
}