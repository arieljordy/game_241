const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/ctrl-signup");
const { signin } = require("../controllers/ctrl-signin");

router.post("/signup", signup);

router.post("/signin", signin);

module.exports = router;
