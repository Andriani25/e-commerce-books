import { Router, Request, Response } from "express";
import Books from "../../models/Items/Books";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const Stock = await Books.find({}).select({
      ISBN: 1,
      tittle: 1,
      value: 1,
      editorial: 1,
      autor: 1,
      stock: 1,
      price: 1,
      distributor: 1,
    });
    res.status(200).send(Stock);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

export default router;
