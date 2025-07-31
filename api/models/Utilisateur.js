const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
    trim: true,
  },
  // nomDuChamp:{ type: Schema.Types.ObjectId, ref: 'User', required: true }
  prenom: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    enum: ["standard", "admin"],
    default: "standard",
  },
  // tableau de références
  demandes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Demande",
      required: false,
    },
  ],

  userImage: {
    type: String,
    default: "",
    required: false,
  },
  points: {
    type: Number,
    required: !true,
  },
  color: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("Utilisateur", userSchema);

module.exports = User;
