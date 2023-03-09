import { Router, Request, Response } from "express";
import User from "./User/index.user";
import Books from "./Books/index.books";
import Stock from "./Stock/index.stock";

const router = Router();

router.use("/user", User);
router.use("/book", Books);
router.use("/stock", Stock);

export default router;
