import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CustomerControllers } from "./controllers/CustomerControllers.js";
import { ListcustomerController } from "./controllers/ListCustomerController.js";
import { DeleCustomerController } from "./controllers/DeleCustomerController.js";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new CustomerControllers().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new ListcustomerController().handle(request, reply)
    })

    fastify.delete("/customerdelete", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new DeleCustomerController().handle(request, reply)
    })

}