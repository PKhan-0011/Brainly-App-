import express from "express";
import router from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

const JWT_SECRET = "123";

export const brainRouter = router();

brainRouter.post("/brain/share", (req, res) => {});

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
