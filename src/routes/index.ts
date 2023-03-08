import { Router, Request, Response } from "express";
import test from "./test/test";

const router = Router();

router.use("/", test);

export default router;
