import jwt from "jsonwebtoken";

require("dotenv").config();

export const createAceessToken = (payload) => {
  return jwt.sign(payload, precess.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (payload) => {
  return jwt.sign(payload, precess.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};


