// routes/user.routes.ts
import { Router } from "express";
import { getAllUsers } from "../controllers/user/userController.ts";
// import { getAllUsers } from "../controllers/user.controller";

const router = Router();

router.get("/", getAllUsers);

export default router;
