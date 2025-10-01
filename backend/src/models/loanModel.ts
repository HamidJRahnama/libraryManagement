import { model, Schema, Types } from "mongoose";

const loanSchema = new Schema({
    userId:{ type:Types.ObjectId , ref:"User" , require:true},
    bookId:{ type:Types.ObjectId , ref:"Book" , require:true},
    loanDate:{type:Date , default:Date.now()},
    returnDate:{type:Date , default:null},
    status:{type:String , enum:["borrowed" , "returned"] , default:"borrowed"}
})

export default model("Loan" , loanSchema)