import express from 'express';
import { configureRoutes } from './routes';
import cors from 'cors'

const app = express();
const port = 3333;


configureRoutes(app);
app.use(express.json())
app.use(cors({
  origin:'http://localhost:3000'
}))
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});