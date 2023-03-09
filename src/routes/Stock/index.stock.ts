import { Router, Request, Response } from "express";
import bookAddStock from "./bookStockAdd";
import bookStock from "./bookListStock";

const router = Router();

router.use("/listStock", bookStock);
router.use("/addStock", bookAddStock);

export default router;
