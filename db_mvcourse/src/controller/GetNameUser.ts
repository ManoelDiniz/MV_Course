import { userRepository } from "../repositories/UserRepository";
import { Request, Response } from "express";

export class getNameUser {
  async getUser(req: Request, res: Response) {
    // try {
      const get = req.body;
      const user = await userRepository.findOne( { where:{login:get.login }} );
      console.log(user)  
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
      }

      const nameuser = user.name_user
      return res.status(200).json({  nameuser });
    // } catch (error) {
    //   return res.status(500).json({ error: "Erro ao obter o nome do usuário" });
    // }
  }
}
