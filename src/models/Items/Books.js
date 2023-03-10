"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    ISBN: {
        type: String,
        required: true,
    },
    tittle: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    price: Number,
    editorial: {
        type: String,
        required: true,
    },
    autor: String,
    stock: Number,
    distributor: String,
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("book", bookSchema);
