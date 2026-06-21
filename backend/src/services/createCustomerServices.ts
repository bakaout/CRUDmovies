import mongoose from "mongoose";

class CreateCustomerServices{
    async execute(){
        console.log("ROTA FOI CHAMADA")

        return {ok: true}
    }
}

export {CreateCustomerServices}