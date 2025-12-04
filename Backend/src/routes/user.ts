// Yha p actaully do routes ban sakte hai abb user ka and brain wala okkh!..

import express from "express";
import router from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { ContentModel, UserModel } from "../db/index.js";
import bcrypt from "bcrypt";
import { dbConnect } from "../db/Connection.js";
import { middleware } from "../middleware.js";

export const JWT_SECRET = "123";

const app = express;

export const userRouter = router();
await dbConnect();

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
  const { email, password } = req.body;

  // abb yha s db mai check karo like ki ye data Present hai ya nahi okkh!..
  // agr nahi hoga to hamm error return kar denge okkh!.
  // but aagar data Mil gya hai to hamm actully token carete karenge okkh!..

  try {
    const existingUser = await UserModel.findOne({
      email,
      password,
    });

    // isse jo first wala email hoga jiisse match kaerga wo mil jayega isme okkh!. as a object,
    // agar mai do chize isme deta to bhi yahi ata but zada filter hoke okkh!..

    if (!existingUser) {
      // iska mtlb ye hai ki ye exist karta hai in dataBase okkh!..
      res.json({
        message: "data are not present in dataBase okkh!..",
      });
    }

    // agar dataBase m chize present hai to wha s token niklega okkh!..

    const token = jwt.sign({ id: existingUser?._id }, JWT_SECRET);

    res.json({
      token,
    });
  } catch (e) {
    const error = e as Error;
    console.log(error);
    res.json({ error });
  }
});

userRouter.post("/content", middleware, async (req, res) => {
  const { title, link } = req.body;
  const userId = req.id ?? " ";

  // sabse pehle y check kar lena like ki ye kahi exist to nahi karte na like in dataBase ookkh!.
  const userData = await ContentModel.create({
    title,
    link,
    // abhi do chhize isme deni hai yrr okkh!..
  });
});

userRouter.get("/content", middleware, async (req, res) => {
  // yha p data Ayega llena hai jo dataBase m presnet hai okkh!>.
  const UserId = req.id;
  const title = req.body.title;

  const data = await ContentModel.find({
    title,
  });
  res.json({
    data,
  });
});

userRouter.delete("/content", middleware, async (req, res) => {
  const link = req.body.link;
  const deleteData = await ContentModel.deleteMany({
    link,
  });
  res.json({
    deleteData,
  });
});

// Yha p jo hamm id de rahe hai wo like id jo hogi wo uder._id se ayega when we check from the dataBNase okkH!.

// abhi bhi kahi na kahii kuch gaati hai isko sahi s kario ek batr ookh!..
