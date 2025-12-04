// Yha p actaully do routes ban sakte hai abb user ka and brain wala okkh!..

import express from "express";
import router from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { UserModel } from "../db/index.js";
import bcrypt from "bcrypt";

const JWT_SECRET = "123";

const app = express;

export const userRouter = router();

userRouter.post("/signUp", async (req, res) => {
  const { userName, email, password } = req.body;

  // ye above wala jo hai wo frontend s mil gya hai okkh!..
  // abb mughe like check karna hai ki ye dataBase m exist karta hai bhi ya nahi okkh!..

  const data = await UserModel.findOne({
    email,
  });

  // Yha p filteration k during mughe ek hi value deni hoti hai like email ya phir password etc..
  // 2-3 chize nahi deni hoti okkh!..

  // abb yha p data jo hai wo object hoga ek hi object hoga okkh!

  if (data) {
    // agar data true hai to ojectt mil gya ha data base mai okkh! to return karrdo bcz hme nahi ichiye tha
    res.json({
      message: "data already exiist okkh!..",
      status: 403,
    });
  }

  // agar data false hua hai to fir dataBase m chize add kardo okkh!.

  const Hashedpassword = await bcrypt.hash(password, 10);

  const data02 = await UserModel.create({
    userName,
    password: Hashedpassword,
    email,
  });

  console.log("data dataBase m chla gya hai okkh!", data02);

  res.json({
    data02,
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
