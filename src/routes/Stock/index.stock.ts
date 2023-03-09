import { Router, Request, Response } from "express";
import bookAddStock from "./bookStockAdd";
import bookStock from "./bookListStock";
import bookRemoveStock from "./bookStockRemove";

const router = Router();

router.use("/", bookStock);
router.use("/addStock", bookAddStock);
router.use("/removeStock", bookRemoveStock);

export default router;
