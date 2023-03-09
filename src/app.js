"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
// Initialization
(0, db_1.connectDB)();
const server = (0, express_1.default)();
// Configurations
server.set("port", process.env.PORT || 3000);
// Middlewares
server.use(body_parser_1.default.json());
server.use((0, morgan_1.default)("dev"));
server.use((0, cors_1.default)({
//     // allowedHeaders: [
//     //     'Origin',
//     //     'X-Requested-With',
//     //     'Content-Type',
//     //     'Accept',
//     //     'X-Access-Token',
//     //   ],
//     //   credentials: true,
//     //   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//     //   preflightContinue: false,
}));
// Global Variables
// Routes
server.use("/", routes_1.default);
exports.default = server;
