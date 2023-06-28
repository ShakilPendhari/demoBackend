const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true}
},{
    versionKey: false
})


const StudentModel = mongoose.model("student",studentSchema)

module.exports = {
    StudentModel
}