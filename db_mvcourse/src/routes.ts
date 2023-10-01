import { Router, Request, Response, response} from 'express'

import { UserController } from './controller/UserController';

const routes = Router();

routes.get('/', (req:Request, res:Response)=>{
    return res.json({message:'Hello word'})
});
routes.post('/register', new UserController().create)


export default routes