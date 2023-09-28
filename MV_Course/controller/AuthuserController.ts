import { Request, Response } from 'express';
import { AuthUser } from '../services/authUser';

export async function login(req: Request, res: Response): Promise<void> {
  const login = req.body.login; 
  const password = req.body.password
  
  console.log(login)
  try {
    
    const result = await AuthUser(login, password);
    console.log(result)
    if (result.success) {
      
      res.status(200).json({ message: "Login bem-sucedido", user: result.user });
    } else {
      
      res.status(401).json({ message: "Falha na autenticação", error: result.message });
    }
  } catch (error) {
    console.error("Erro ao autenticar o usuário:", error);
    
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}
