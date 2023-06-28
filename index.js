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


app.listen(4500, async ()=>{
    try{
        await connection
        console.log("Connect to the DB");
    }
    catch(err){
        console.log("Cannot connect to DB");
    }
    console.log(`Running the server at port ${ 4500 }`)
})