const express = require("express")
const {  UserModel } = require("../Model/User.model");

const userRouter = express.Router();


userRouter.get("/", async ( req,res)=>{
    let query = req.query
    try{
        const users = await UserModel.find(query);
        res.send(users);
    }
    catch(err){
        res.send({"msg":"Cannot get the users","error":err.message})
    }
})


userRouter.post("/register", async (req,res)=>{
    try{
        const student = new UserModel(req.body)
        await student.save()
        res.send({"msg":"Student has been registered"});
    }
    catch(err){
        res.send({"msg":"Cannot register","Error":err.message});
    }
})


userRouter.patch("/update/:id", async (req,res)=>{
    const ID = req.params.id;
    const payload = req.body;
    console.log(ID,payload);

    try{
        await UserModel.findByIdAndUpdate({_id:ID},payload)
        res.send("Movie data has been changed");
    }
    catch(err){
        res.send({"msg":"Cannot modify","error":err.message})
    }
})


userRouter.delete("/delete/:id", async (req,res)=>{
    const ID = req.params.id
    try{
          await UserModel.findByIdAndDelete({_id:ID})
          res.send({"msg":"User has been Deleted"})
    }
    catch(err){
        res.send({"msg":"Cannot  Delete","Error":err.message})
    }
})

module.exports = {
   userRouter
}