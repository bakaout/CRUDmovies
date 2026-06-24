import Customer from "../models/customer.js";

class ListCustomerServices {
    async execute(){
        const customers = Customer.find()

        return customers
    }
}

export {ListCustomerServices}