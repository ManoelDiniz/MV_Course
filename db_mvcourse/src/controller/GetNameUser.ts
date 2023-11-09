
import { Request, Response } from "express";

export class getNameUser {
  async getUser(req: Request, res: Response) {
    
      const get = req.body.nome;
       
      
        
      
      return res.status(200).json( {get} );
    
  }
}
