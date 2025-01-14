import express, { Request, Response } from "express";
import globalError from "./ErrorHandlers/GlobalError";
import { routeError } from "./ErrorHandlers/RouteError";
import cors from 'cors'
const app = express();

//parsers
app.use(express.json());
app.use(cors())

app.get("/", async (req: Request, res: Response, next) => {
  try {
    res.send("SiSCOTEk server is running!");
  } catch (err) {
    console.log(err);
    next(err);
  }
});

app.use("*", routeError);
app.use(globalError);
export default app;
