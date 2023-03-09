import { Router, Request, Response } from "express";
import Books from "../../models/Items/Books";

const router = Router();

router.put("/", async (req: Request, res: Response) => {
  const { ISBN, number, tittle } = req.body;

  if (!ISBN || !number || !tittle) {
    return res.status(400).send("¡Faltan datos del libro!");
  }

  console.log("ISBN", ISBN, "number", number, "Tittle", tittle);

  try {
    const book = await Books.findOne({ ISBN });

    console.log("Documento normal", book);

    if (book && book.stock) {
      const nuevaCantidad = book.stock - number;

      if (nuevaCantidad < 0) {
        return res.status(400).send("¡Es imposible poner un Stock negativo!");
      }

      const stockRenovado = (book.stock = nuevaCantidad);

      if (stockRenovado) {
        await book.save();
      }

      // const result = await book.updateOne(
      //   { ISBN: ISBN },
      //   {
      //     $set: { stock: Number(nuevaCantidad) },
      //   }
      // );

      // console.log("Documento actualizado", result);

      return res.status(200).send(`¡Stock del libro ${tittle} actualizado! `);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
