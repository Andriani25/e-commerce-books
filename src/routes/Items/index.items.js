"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksList_1 = __importDefault(require("./booksList"));
const bookAdd_1 = __importDefault(require("./bookAdd"));
const router = (0, express_1.Router)();
router.use("/", booksList_1.default);
router.use("/add", bookAdd_1.default);
exports.default = router;
