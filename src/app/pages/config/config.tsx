import { useState } from "react"
import { InputAlterUser } from "./components/InputAlter"


export const ConfigUser: React.FC = () => {
    const [password , setPassword] = useState('')
    const [Newpassword , setNewPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        
    <body>
        <InputAlterUser
        placehoder="Sua senha"
        type="password"
        onChange={setPassword} />
        <InputAlterUser
        placehoder="Nova senha "
        type="password"
        onChange={setNewPassword} />
        <InputAlterUser
        placehoder="Email "
        onChange={setEmail} />

       
    </body>
)}