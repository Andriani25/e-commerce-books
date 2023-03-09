"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_user_1 = __importDefault(require("./User/index.user"));
const index_items_1 = __importDefault(require("./Items/index.items"));
const router = (0, express_1.Router)();
router.use("/user", index_user_1.default);
router.use("/book", index_items_1.default);
exports.default = router;
