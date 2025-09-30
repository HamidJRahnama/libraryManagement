import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{type:String , require:true},
    email:{type:String , require:true , unique:true},
    password:{type:String , require:true },
    role:{type:String , enum:["admin" , "user"] , default:"user" },
    createdAt:{type:Date , default:Date.now },
})

export default model("User" , userSchema)