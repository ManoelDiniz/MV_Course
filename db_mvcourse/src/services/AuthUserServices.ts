import {  Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import * as crypto from 'crypto'

class AuthUserServices {
    async AuthUser(login: string, password: string,  res: Response) {
        
            
        const user = await userRepository.findOne({ where: { login: login } });

        
        if (!user) {
            return
        }

        
        const passwordMatch = await bcrypt.compare(password, user.password);

        if(passwordMatch){
            const payload = {
                userId: user.id
            }
           const hash = crypto.randomBytes(32).toString('hex')
           const token = jwt.sign(payload, hash, {expiresIn:'2h'})

           return({ token })
        }
        
        
    }}

export default AuthUserServices