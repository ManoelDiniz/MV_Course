import { Express } from 'express';
import { login } from './controller/AuthuserController';

export function configureRoutes(app: Express): void {
  app.post('/login', login); 
  
}
