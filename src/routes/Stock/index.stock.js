"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookStockAdd_1 = __importDefault(require("./bookStockAdd"));
const bookListStock_1 = __importDefault(require("./bookListStock"));
const router = (0, express_1.Router)();
router.use("/listStock", bookListStock_1.default);
router.use("/addStock", bookStockAdd_1.default);
exports.default = router;
