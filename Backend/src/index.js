const express = require("express")
const dotenv=require("dotenv")


const app=express()


app.use(express.json())

const connectDatabase =require("./configs/db");



//config

dotenv.config({path:"src/configs/config.env"})

// connection the dataBase;
connectDatabase()


//all routes imports

const favourit=require("./routes/productRoute")
const user=require("./routes/authRoute")

app.use("/api/v1", favourit)
app.use("/api/v1",user)



 


// app.get("/", (req, res)=>{

//     res.send("Hello get")  

// })


// app.post("/register", (req, res)=>{



// })

const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

//handling Uncatch Exception 

process.on("uncatchException ", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`)
    process.exit(1)
})