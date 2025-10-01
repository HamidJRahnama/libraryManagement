import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { getAllUsers } from "./controllers/user/userController.ts";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Server is sdaf running 🚀");
});

app.use(`/`, getAllUsers)



mongoose.connect(`mongodb://libraryAdmin:libraryPass@192.168.1.115:27018/libraryManagement?authSource=admin`,{
    autoIndex:true
}).then(()=>{
    console.log("Connected to MongoDB")
    app.listen(PORT , ()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}).catch(error =>{
    console.log("Error connecting to MongoDB:", error )
})
