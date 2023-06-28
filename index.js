const express = require("express");
const { connection } = require("./db");
require("dotenv").config();
const { userRouter } = require("./Routes/Users.route");
const { studentRouter } = require("./Routes/Student.route");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome");
})

app.use("/users",userRouter);

app.use("/students",studentRouter);


app.listen(process.env.port, async ()=>{
    try{
        await connection
        console.log("Connect to the DB");
    }
    catch(err){
        console.log("Cannot connect to DB");
    }
    console.log(`Running the server at port ${ process.env.port }`)
})