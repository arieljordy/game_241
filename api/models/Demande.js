const mongoose = require("mongoose");

const demandeSchema = new mongoose.Schema({
  demandeur: {
    // Une référence utilisateur
    type: mongoose.Schema.Types.ObjectId,
    ref: "Utilisateur",
    require: true,
  },
  // observateurs: {
  //   type: Array,
  //   required: false,
  // un tableau de références
  // },
  active: {
    type: Boolean,
    required: true,
  },
  typeDePartie: {
    type: String,
    enum: ["solo", "groupe"],
    default: "solo",
  },
});

const User = mongoose.model("Demande", demandeSchema);

module.exports = User;
