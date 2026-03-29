import express, { Request, Response, NextFunction } from "express";
import type { CorsOptions } from "cors";
import mongoConnect from "./config/db.js";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import cors from "cors";

dotenv.config();

import authRoute from "./routes/auth.route.js";
import usersRoute from "./routes/users.route.js";
import moviesRoute from "./routes/movies.route.js";

const app = express();

const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:5173"];

const corsOptions: CorsOptions = {
  allowedHeaders: ["Content-Type", "Authorization"],
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void,
  ) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed"));
    }
  },
};

app.use(cors(corsOptions));

const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: "יותר מדי בקשות",
});

app.set("trust proxy", 1);

app.use(globalLimiter);

app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.send("Server is live");
});

const blockedOriginForPost = ["http://127.0.0.1:5500"];

app.use((req: Request, res: Response, next: NextFunction) => {
  const origin = req.get("Origin");
  const isBlockedOrigin = Array.isArray(blockedOriginForPost)
    ? blockedOriginForPost.includes(origin ?? "")
    : origin === blockedOriginForPost;
  if (
    (req.method === "GET" ||
      req.method === "POST" ||
      req.method === "PUT" ||
      req.method === "DELETE") &&
    origin &&
    isBlockedOrigin
  ) {
    return res
      .status(403)
      .json({ message: `${req.method} not allowed from this origin` });
  }
  next();
});

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/movies", moviesRoute);

app.use("/", (_req: Request, res: Response) => {
  res.send("fallback..404 - not found");
});

mongoConnect()
  .then(() =>
    app.listen(3005, () => console.log("Server is running...")),
  )
  .catch(console.error);
