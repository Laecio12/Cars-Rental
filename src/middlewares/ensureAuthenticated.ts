import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  console.log("aqui", authHeader);
  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "a50f311cac4781a23d6376585bace9d3a3e12453"
    ) as IPayload;
    console.log(sub);
    next();
  } catch {
    throw new Error("Invalid Token");
  }
}
