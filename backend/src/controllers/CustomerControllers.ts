import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateCustomerServices } from '../services/createCustomerServices.js';

class CustomerControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {name, email} = request.body as {name: string,  email: string}
        console.log(name)
        console.log(email)

        const customerServices = new CreateCustomerServices()//inicializando a classe que criei o serviço

        const customer = await customerServices.execute()//recebendo o retorno do serviço

        reply.send(customer)//retornando o retorno do serviço para o front-end
    }
}

export {CustomerControllers}