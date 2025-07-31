require("dotenv").config();
const Utilisateur = require("../models/Utilisateur");
const bcrypt = require("bcrypt");
const env = process.env;
const keyJwt = env.KEY_JWT;
const jwt = require("jsonwebtoken");
const { cookiesOptions } = require("../config/cookies-options");
const { colors, getRandomColorIndex } = require("../functions/colors");

exports.signup = async (req, res, next) => {
  try {
    if (req.body.password === req.body.passwordConfirm) {
      const hash = await bcrypt.hash(req.body.password, 13);
      const user = new Utilisateur({
        ...req.body,
        password: hash,
        points: 0,
        color: colors[getRandomColorIndex(colors)],
      });
      const player = await user.save();
      const playerDatas = {
        userId: player._id,
        nom: player.nom,
        prenom: player.prenom,
        role: player.role,
        points: player.points,
        userImage: player.userImage || "",
        color: player.color,
      };
      const token = jwt.sign(playerDatas, keyJwt, {
        expiresIn: "168h",
      });
      res.cookie("auth_player", token, cookiesOptions);
      res.status(201).json({
        status: 201,
        message: "Compte créé avec succès.",
        playerDatas,
        xcrsf: token,
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "Désolé les mots de passes sont différents.",
      });
    }
  } catch (erreur) {
    console.clear();
    console.log(erreur),
      res.status(500).json({
        status: 500,
        message: "Une erreur s'est produite.",
        erreur,
        erreurString: erreur.toString(),
      });
  }
};
