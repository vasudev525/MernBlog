import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("connected to database successfully.") 
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;