import { Router, Request, Response } from "express";
import User from "./User/index.user";

const router = Router();

router.use("/user", User);

export default router;
