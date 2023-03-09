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
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ISBN, tittle, price, editorial, distributor, aditions } = req.body;
    if (!ISBN || !tittle || !price || !editorial || !distributor) {
        return res.status(400).send("¡Faltan datos del libro!");
    }
    try {
        let book = yield Books_1.default.findOne({ ISBN });
        if (book) {
            const nuevaCantidad = book.stock + aditions;
            const result = yield book.updateOne({ ISBN: ISBN }, {
                $set: { Stock: nuevaCantidad },
            });
            if (result) {
                return res.status(200).send(`¡Stock del libro ${tittle} actualizado! `);
            }
        }
        const newBook = yield Books_1.default.create({
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
    }
    catch (error) {
        res.status(400).send(error);
    }
}));
exports.default = router;
