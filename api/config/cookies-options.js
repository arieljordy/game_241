require("dotenv").config();
const env = process.env;

exports.cookiesOptions =
  env.NODE_ENV === "developpement"
    ? {
        httpOnly: false,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      }
    : {
        httpOnly: false,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      };
