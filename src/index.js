import dotenv from "dotenv"
import connectDB from "./db/index.js"; 
dotenv.config({
    path : "./.env"
})








connectDB()




/*
import express from "express"
import connectDB from "./db"
const app = express()


( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
        console.log("ERRR:",error);
        throw err
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR:", error)
        throw err
    }
})()
    */
   