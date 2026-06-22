import mongoose from 'mongoose';

export async function connectDatabase() {
     console.log(process.env.DATABASE_URL);
    await mongoose.connect(process.env.DATABASE_URL as string);
}
