import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) throw new Error("MONGO_URI environment variable is missing!");


export async function connectDB() {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Database connected!");
    } catch (err) {
        console.error("Could not connect to database!");
        console.log(err);
    }
}