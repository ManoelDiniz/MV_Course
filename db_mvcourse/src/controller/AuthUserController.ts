import { Request, Response } from "express";
import AuthUserServices from "../services/AuthUserServices";



class AuthUser {
   async authUser (req:Request, res:Response){

        const { login, password  } = req.body

        const authUser = new AuthUserServices()

        const result = await authUser.AuthUser(login,password,res)
        if(result){
           return res.status(200).json( result.token )
        } else{
            return res.status(500).json({message:'Usuario ou senha Incorreta!'})
        }

   } 
}

export default AuthUser 

