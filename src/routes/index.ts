import { Router, Request, Response } from "express";
import User from "./User/index.user";
import Items from "./Items/index.items";

const router = Router();

router.use("/user", User);
router.use("/book", Items);

export default router;
