import type { Request, Response } from "express";

import * as userServices from "../../services/userService.ts";

export const getAllUsers = async (req:Request , res:Response)=>{
    try {
        const users =await userServices.getAllUsers()
        res.send({message:"U get all user "})
    } catch (error) {
            res.status(500).json({ message: "Error fetching users" });

    }
}