import * as express from "express"
import { AppDataSource } from "./data-source"
import routes from "./routes"
import * as cors from 'cors'

const app = express();
AppDataSource.initialize().then(()=>{
    console.log("Banco iniciado!")
}).catch((err) =>{
    console.log("Erro ao iniciar o banco de dados",err)
})
app.use(express.json());

app.use(
    cors({
      origin: 'http://localhost:3000',
    })
  );
  

app.use(routes)

app.listen(3333)

