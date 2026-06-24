import  Customer  from '../models/customer.js'

interface DeleteCustomerProps{
    id: string
}

class DeleteCustomerService{
    async execute({id}: DeleteCustomerProps){

        if(!id){
            throw new Error("Solicitação invalida")
        }

        const findCustomer = await Customer.findByIdAndDelete(id)

        if(!findCustomer){
            throw new Error("Cliente não existe")
        }

        return {
            message: 'Deletado com sucesso'
        }
    }

}

export {DeleteCustomerService}