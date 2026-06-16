import Fastify from 'fastify';
import cors from '@fastify/cors';
//trocar no tsconfig de "commonJs" para "module" para podeer importar
import {routes} from './routes.js'


//instanciando o servidor
const app = Fastify({ logger: true})

const start = async () => {

    await app.register(cors);
    await app.register(routes);

    try {
        await app.listen({ port: 3333 })
    } catch (error) {
        process.exit(1)//0sucesso, 1erro
    }
}

start()