import { Router, Request, Response } from "express";
import register from "./register";
import userInfo from "./userInfo";

const router = Router();

router.use("/", userInfo);
router.use("/register", register);

export default router;
