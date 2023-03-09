"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = __importDefault(require("./register"));
const userInfo_1 = __importDefault(require("./userInfo"));
const router = (0, express_1.Router)();
router.use("/", userInfo_1.default);
router.use("/register", register_1.default);
exports.default = router;
