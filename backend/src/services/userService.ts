import userModel from "../models/userModel.ts"

export const getAllUsers = async ()=>{
    return await userModel.find()
}

