import {  useCallback, useRef, useState } from 'react'
import { InputLogin } from './components/InputLogin';
import { ButtonLogin } from './components/ButtonLogin';


export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null)
    const [ email , setEmail ]= useState('');
    const [ password , setPassword ]= useState('');

    const HanddleEntrar = useCallback(() =>{
        console.log(password)
        console.log(email)
        
    }, [password,email]
    )

 
    return (
    <div>
        <form>
            <InputLogin
            label='Email'
            value={email}
            onChange={newValue => setEmail(newValue)}
            onPressEnter={() => inputPasswordRef.current?.focus()}/>           
            <InputLogin 
            label='Senha'
            value={password}            
            onChange={newValue => setPassword(newValue)}
            type='password'/>

            <ButtonLogin 
            type='button' 
            onClick={HanddleEntrar}>
                Entrar
            </ButtonLogin>
            <ButtonLogin 
            type='button' 
            onClick={HanddleEntrar} >
                Cadastrar
            </ButtonLogin>
            
        </form>
    </div>
    )
}