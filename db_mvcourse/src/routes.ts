import { Router, Request, Response, response} from 'express'

import { UserController } from './controller/UserController';
import AuthUser from './controller/AuthUserController';
import { getNameUser } from './controller/GetNameUser';

const routes = Router();

routes.get('/', (req:Request, res:Response)=>{
    return res.json({message:'Hello word'})
});
routes.post('/register', new UserController().create)

routes.post('/login', new AuthUser().authUser)
routes.get('/get-user', new getNameUser().getUser)


export default routes