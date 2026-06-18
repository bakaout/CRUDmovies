import mongoose from 'mongoose';

export async function connectDatabase() {
    await mongoose.connect(process.env.DATABASE_URL as string);
}
