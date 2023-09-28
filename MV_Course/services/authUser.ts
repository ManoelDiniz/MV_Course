
import { findUserByLogin } from "../repository/AuthRepository";

export const AuthUser = async (login: string, password: string) => {
    try {
        
        const user = await findUserByLogin(login);

        if (user) {
            
            if (user.Password === password) {
                return { success: true, user };
            } else {
                return { success: false, message: "Senha incorreta" };
            }
        } else {
            return { success: false, message: "Usuário não encontrado" };
        }
    } catch (error) {
        console.error("Erro ao autenticar o usuário:", error);
        
        return { success: false, message: "Erro ao autenticar o usuário" };
    }
};
