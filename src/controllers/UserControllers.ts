import { request } from "http";
import express, { Request, Response } from "express";
import { AppDataSource } from "../data-source";
// Importar a entidade User
import { User } from "../entity/User";
import { response } from "express";
// Criar a aplicação express
const router = express.Router();

// Criar a rota para criar um usuário
router.post("/users", async (req: Request, res: Response) => {

    try {
        // Receber os dados do usuário do corpo da requisição
        var data = req.body;
// Criar uma instância do repositório de usuários
    const userRepository = AppDataSource.getRepository(User);
// Verificar se o usuário já existe com base no email
    const existingUser = await userRepository.findOne({where: { email: data.email}});

    if(existingUser){
        res.status(400).json({
            message: "Já existe usuário cadastrado com esse e-mail!",
            
        });
        return;
    }
// Criar um novo usuário com os dados recebidos
     const newUser = userRepository.create(data);
// salvar o novo usuário no banco de dados
await userRepository.save(newUser);
;

//retorna uma resposta de sucesso
        res.status(201).json({
            message: "Usuario cadastrado com sucesso",
            user: newUser,
        });

    } catch(error){

        res.status(500).json({

    message: "Erro ao cadastar usuario"
})
    }

});
// Exportar a intruçao que esta dentro da contante router
export default router;