require("dotenv").config();
const Utilisateur = require("../models/Utilisateur");
const bcrypt = require("bcrypt");
const env = process.env;
const keyJwt = env.KEY_JWT;
const jwt = require("jsonwebtoken");
const { cookiesOptions } = require("../config/cookies-options");

exports.signin = async (req, res, next) => {
  try {
    const player = await Utilisateur.findOne({
      email: req.body.email.toLowerCase(),
    });
    if (player) {
      const check = await bcrypt.compare(req.body.password, player.password);
      if (check) {
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
        res.status(200).json({
          status: 200,
          message: "Connexion établie avec succès.",
          playerDatas,
          xcrsf: token,
        });
      } else {
        res.status(400).json({
          status: 400,
          message: "Identifiant ou mot de passe incorrect.",
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        message: "Identifiant ou mot de passe incorrect.",
      });
    }
  } catch (erreur) {
    console.clear();
    console.log(erreur);
    res.status(500).json({
      status: 500,
      message: "Une erreur s'est produite.",
      erreur,
      erreurString: erreur.toString(),
    });
  }
};
