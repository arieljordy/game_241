const mongoose = require("mongoose");

// on active et désactive le booléen
const partieSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  players: {
    type: Array,
    required: true,
    // un tableau de références
  },
  observateurs: {
    type: Array,
    required: true,
    // un tableau de références
  },
  active: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    enum: ["solo", "groupe"],
    default: "solo",
  },
  // les messages en perspectives
});

const User = mongoose.model("Partie", partieSchema);

module.exports = User;
