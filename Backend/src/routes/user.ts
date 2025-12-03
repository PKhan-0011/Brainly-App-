// Yha p actaully do routes ban sakte hai abb user ka and brain wala okkh!..

import express from "express";
import router from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "123";

const app = express;

export const userRouter = router();

userRouter.post("/signUp", (req, res) => {
  const { userName, email, password } = req.body;

  res.json({
    message: "signIN wali bat chit hai yha p okkh!..",
  });
});

userRouter.post("/signIn", async (req, res) => {
  const { userName, email, password } = req.body;

  // abb yha s db mai check karo like ki ye data Present hai ya nahi okkh!..
  // agr nahi hoga to hamm error return kar denge okkh!.
  // but aagar data Mil gya hai to hamm actully token carete karenge okkh!..

  const token = jwt.sign({ id: 1 }, JWT_SECRET);

  res.json({
    token,
  });
});

userRouter.post("/content", (req, res) => {});

userRouter.get("/content", (req, res) => {});

userRouter.delete("/content", (req, res) => {});

// Yha p jo hamm id de rahe hai wo like id jo hogi wo uder._id se ayega when we check from the dataBNase okkH!.
