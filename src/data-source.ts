import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "!123456!A",
    database: "Emerson",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [__dirname + "/migration/*.js"],
});

AppDataSource.initialize()
.then(() => {
    console.log("Conexão com o banco de dados realizada com sucesso!");

}).catch((error) => {
    console.log("Erro na conexão com o banco de dados:", error);
})