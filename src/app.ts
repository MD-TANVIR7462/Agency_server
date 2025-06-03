import express, { Request, Response } from "express";
import globalError from "./ErrorHandlers/GlobalError";
import { routeError } from "./ErrorHandlers/RouteError";
import cors from "cors";
import router from "./Router";
import cookieParser from "cookie-parser";

const app = express();

//parsers
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://siscotek.vercel.app"],
    credentials:true,
  })
);
app.use(cookieParser());

// router
app.use("/api/v1", router);

app.get("/", async (req: Request, res: Response, next) => {
  try {
    res.send("Agency server is running!");
  } catch (err) {
    next(err);
  }
});

app.use("*", routeError);
app.use(globalError);
export default app;
