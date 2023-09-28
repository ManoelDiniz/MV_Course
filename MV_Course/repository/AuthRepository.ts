import { Repository } from "typeorm";
import { Users } from "../src/entity/User";
import { AppDataSource } from "../src/data-source";


export const getCustomRepository = (): Repository<Users> => {
    return AppDataSource.getRepository(Users);
};


export const findUserByLogin = async (login: string): Promise<Users | undefined> => {
    const userRepository = getCustomRepository();
    
    try {
        const user = await userRepository.findOne({ where: { login } });
        return user;
    } catch (error) {
        console.error("Erro ao encontrar o usuário por login:", error);
        throw error;
    }
};
