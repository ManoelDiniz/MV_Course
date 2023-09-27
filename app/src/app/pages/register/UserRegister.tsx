import { useState } from "react"
import { InputRegister } from "./components/InputUserRegister"
import './components/UserRegister.css'
import mvCourseImage from './components/Mv_course.png'

export const Register = () => {
  const [ Login, setLogin ] = useState('')
  const [ Senha, setPass ] = useState('')
  const [ CPF, setCPf ] = useState('')
  const [ Email, setEmail ] = useState('')
  return(
    <body>
      <div className="input-register">
        <img src={mvCourseImage} alt="MV Course" />
        
        <h1>Tela de Cadastro</h1>
        <div className="Input-register2">
          < InputRegister 
          placehoder ='Nome do usuario   '
          value= {Login}
          onChange={(newValue) =>setLogin(newValue)}
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
          placehoder ='CPF  '
          value= {CPF}
          type="number"
          onChange={(newValue) =>setCPf(newValue)}
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
        <button>Registrar</button>

      </div>
    </body>
  )
}