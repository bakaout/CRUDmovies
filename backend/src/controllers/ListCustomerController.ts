import { FastifyRequest, FastifyReply } from 'fastify'
import { ListCustomerServices } from '../services/listCustomerServices.js'

class ListcustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomerServices = new ListCustomerServices()

        const customer = await listCustomerServices.execute()

        reply.send(customer)

    }
}

export {ListcustomerController}