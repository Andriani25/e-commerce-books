import { Router, Request, Response } from "express";
import booksList from "./booksList";
import bookAdd from "./bookAdd";

const router = Router();

router.use("/", booksList);
router.use("/add", bookAdd);

export default router;
