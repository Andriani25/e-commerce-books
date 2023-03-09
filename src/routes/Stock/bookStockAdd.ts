import { Router, Request, Response } from "express";
import Books from "../../models/Items/Books";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { ISBN, tittle, price, editorial, distributor, aditions } = req.body;

  if (!ISBN || !tittle || !price || !editorial || !distributor) {
    return res.status(400).send("¡Faltan datos del libro!");
  }
  try {
    let book = await Books.findOne({ ISBN });

    if (book) {
      const nuevaCantidad = book.stock + aditions;

      const result = await book.updateOne(
        { ISBN: ISBN },
        {
          $set: { Stock: nuevaCantidad },
        }
      );

      if (result) {
        return res.status(200).send(`¡Stock del libro ${tittle} actualizado! `);
      }
    }

    const newBook = await Books.create({
      ISBN,
      tittle,
      price,
      value: price + 200,
      editorial,
      distributor,
      stock: aditions,
    });

    if (newBook) {
      newBook.save();

      return res.status(200).send("¡Libro agregado al Stock!");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
