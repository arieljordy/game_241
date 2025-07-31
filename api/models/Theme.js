const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
  players: {
    type: Array,
    required: true,
    // un tableau de références
  },
  pointsRequis: {
    type: Array,
    required: true,
  },
});

const User = mongoose.model("Theme", themeSchema);

module.exports = User;
