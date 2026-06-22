import Customer from "../models/customer";

interface CreateCustomerProps{
    name: string,
    email: string
}

class CreateCustomerServices{
    async execute({name, email}: CreateCustomerProps){
        
    if(!name || !email){
        throw new Error("Preencha todos os campos");
    }
    
    const customer = await Customer.create({
        name,
        email,
        status: true
    })

        return customer
    }
}

export {CreateCustomerServices}