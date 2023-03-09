"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const itemsSchema = new mongoose_1.Schema({
    value: {
        type: Number,
        required: true,
    },
    itemCode: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    distributor: {
        Array: [String],
    },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)("items", itemsSchema);
