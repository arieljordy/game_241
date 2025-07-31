const jwt = require("jsonwebtoken");
require("dotenv").config();
const env = process.env;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const playerDatas = jwt.verify(token, env.KEY_JWT);
    const userId = playerDatas.userId;
    req.auth = {
      userId,
    };
    next();
  } catch (erreur) {
    res.status(401).json({
      status: 401,
      erreur,
      erreurString: erreur.toString(),
      message: "Vous n'êtes pas authentifié.",
    });
  }
};
