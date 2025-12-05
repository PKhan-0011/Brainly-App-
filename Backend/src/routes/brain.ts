import express from "express";
import router from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { middleware } from "../middleware.js";
import { LinkModel } from "../db/index.js";
import { RandomValue } from "../utilis.js";
import { dbConnect } from "../db/Connection.js";

const JWT_SECRET = "123";

export const brainRouter = router();

dbConnect();

brainRouter.post("/brain/share", middleware, async (req, res) => {
  const { shareLink } = req.body; // frontend s ata hai ye okkh!..

  try {
    if (shareLink) {
      // agar ye true hua to hamm share kar dete hai okh!.
      // middleware s ye chize return hui thi like decode.id s return ki thi req.uuserId yahi yah p rakh lo okkh!..
      const data = await LinkModel.create({
        userId: req.id,
        hash: RandomValue(10), // yha s jo bhi data jo hoga like wo dataBase m store ho jayega like hash function ki tarah okkh!..
      });

      console.log(data);
    } else {
      const deleteObject = await LinkModel.deleteOne({
        userId: req.id,
      });
      console.log("Ye delete wala object hai okkhg!", deleteObject);
    }
    res.json({
      message: "Updated sahred link",
    });
  } catch (e) {
    console.log(e, "error hai ye okh!..");
  }
});

brainRouter.get("/brain/share/:shareLink", (req, res) => {
  // Yha p mughe like shareLink nikalana padega okkh!..
  // and ye jo hai wo path params hai and path parama s jo link niklega wo hai like const link = req.params.id;

  const id = req.params.shareLink; // yha s hame like shareLink mil jayega okkh!..

  res.json({
    id,
  });
  // yha s id share karr sakte hai hmm okkh!..
});

// to ye jo hai wo like :shareLink isme mughe actually link milta hai from req.params.id
