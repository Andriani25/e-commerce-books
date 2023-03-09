"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Books_1 = __importDefault(require("../../models/Items/Books"));
const router = (0, express_1.Router)();
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ISBN, number, tittle } = req.body;
    if (!ISBN || !number || !tittle) {
        return res.status(400).send("¡Faltan datos del libro!");
    }
    console.log("ISBN", ISBN, "number", number, "Tittle", tittle);
    try {
        const book = yield Books_1.default.findOne({ ISBN });
        console.log("Documento normal", book);
        if (book && book.stock) {
            const nuevaCantidad = book.stock - number;
            if (nuevaCantidad < 0) {
                return res.status(400).send("¡Es imposible poner un Stock negativo!");
            }
            const stockRenovado = (book.stock = nuevaCantidad);
            if (stockRenovado) {
                yield book.save();
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
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
exports.default = router;
