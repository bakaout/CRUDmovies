import mongoose, { Document, Schema } from 'mongoose';

export interface ICustomer extends Document {
    name: string;
    email: string;
    status: boolean;
    created_at: Date;
    updated_at: Date;
}


const CustomerSchema = new Schema<ICustomer>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
},
{
    collection: 'customers',//nome do schema/collection no mongodb
    timestamps: { //Mongoose adiciona automaticamente
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}
)

const Customer = mongoose.model<ICustomer>(
    'Customer',
    CustomerSchema
);

export default Customer