import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes";

const server: Application = express();

// Configurations

server.set("port", process.env.PORT || 3000);

// Middlewares
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
