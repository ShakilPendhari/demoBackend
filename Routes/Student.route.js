const express = require("express")
const { StudentModel } = require("../Model/Student.model");

const studentRouter = express.Router();


studentRouter.get("/",async ( req,res)=>{
    let query = req.query
    try{
        const students = await StudentModel.find(query);
        res.send(students);
    }
    catch(err){
        res.send({"msg":"Cannot get the users","error":err.message})
    }
})


studentRouter.post("/register", async (req,res)=>{
    try{
        const student = new StudentModel(req.body)
        await student.save()
        res.send({"msg":"Student has been registered"});
    }
    catch(err){
        res.send({"msg":"Cannot register","Error":err.message});
    }
})


module.exports = {
    studentRouter
}