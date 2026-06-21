import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CustomerControllers } from "./controllers/CustomerControllers.js";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new CustomerControllers().handle(request, reply)
    })

}