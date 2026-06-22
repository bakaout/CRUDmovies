import "dotenv/config";
import Fastify from 'fastify';
import cors from '@fastify/cors';
//trocar no tsconfig de "commonJs" para "module" para podeer importar
import {routes} from './routes.js'
import { connectDatabase } from "./config/database.js";


//instanciando o servidor
const app = Fastify({ logger: true})

const start = async () => {
    try {
        // Conectand ao MongoDB
        await connectDatabase();
        console.log("MongoDB conectado");

        // Registra plugins e rotas
        await app.register(cors);
        await app.register(routes);

        // servidos na porta 3333
        await app.listen({ port: 3333 });

        console.log("Servidor rodando na porta 3333");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();