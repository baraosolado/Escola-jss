import express, { Request, Response } from "express";
import { error } from "console";
// importar o arquivo de configuração do banco de dados
import { AppDataSource } from "./data-source";


// Criar a aplicaçao express
const app = express();

// Cria o middleware para analisar o corpo da requisição como JSON
app.use(express.json());
// Incluir as controllers
import UsersController from "./controllers/UserControllers";


app.use('/', UsersController);


app.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo SolandoX9")
});



app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});

console.log("oooola mundo")