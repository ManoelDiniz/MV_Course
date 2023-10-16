import { userRepository } from "../repositories/UserRepository";
import * as bcrypt  from 'bcrypt'
import { Request, Response } from "express";

export class UserController {

    async create(req: Request, res: Response) {
        const { login, password, name_user, email_user } = req.body;

        console.log(req.body)
        const userExist = await userRepository.findOne({ where: { email_user: email_user } });

        if (userExist) {
            return res.status(400).json({ error: "Email já cadastrado!" });
        }

        try {
            const saltRounds = 10;
            const hashPassword = await bcrypt.hash(password, saltRounds);
            console.log(hashPassword)
            
            const newUser = userRepository.create({
                login,
                password: hashPassword,
                name_user,
                email_user
            });

            
            await userRepository.save(newUser);

           
            const { password: __, ...user } = newUser;

            return res.status(201).json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Erro ao criar usuário." });
        }
    }
}
