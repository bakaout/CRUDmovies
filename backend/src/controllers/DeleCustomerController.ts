import {FastifyRequest, FastifyReply} from 'fastify'
import { DeleteCustomerService } from '../services/DeleCustomerService.js'

class DeleCustomerController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const {id} = request.query as {id: string}// pegando o id do banco de renomeando para id do tipo string

        const CustomerService = new DeleteCustomerService()//instancia do serviço

        const customer = await CustomerService.execute({id})

        reply.send(customer)
    }
    
}

export {DeleCustomerController}