import type { NextFunction, Request, Response } from "express";

import jwt, { type JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./routes/user.js";

export async function middleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"] ?? " ";

  if (!token) {
    // agar ye frontend s ye token nahi aata hai na to wo error show karega okkh!>.
    return null;
  }

  // agar token ata hai yab kya karna hai okkh!>.
  const decode = jwt.verify(token, JWT_SECRET) as JwtPayload;

  console.log(decode);

  if (decode) {
    req.id = decode.id;
    next();
  } else {
    res.json({
      message: "decode m hi kuch gdbd hai okkh!..",
    });
  }
}
