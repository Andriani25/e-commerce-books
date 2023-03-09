import express, { Application } from "express";
import { connectDB } from "./db";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

// Initialization

connectDB();
const server: Application = express();

// Configurations

server.set("port", process.env.PORT || 3000);

// Middlewares
server.use(bodyParser.json());
server.use(morgan("dev"));
server.use(
  cors({
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
  })
);

// Global Variables

// Routes

server.use("/", routes);

export default server;
