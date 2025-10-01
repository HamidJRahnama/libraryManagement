import { Router, type Request, type Response } from "express";
import authMiddleware from "../middlewares/authMiddleware.ts";

const router = Router()

// router.use(authMiddleware)

router.get("/", async (req:Request , res:Response)=>{

    try {
        console.log("Path: /" , "GETALLUSER")
        res.send("Path: / GETALLUSER" ,)
    } catch (error) {
        console.log("Path: /" , "GETALLUSER")
        res.status(500).send()
        
    }

})