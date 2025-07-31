const demande = require("../models/Demande");

exports.createDemande = async (io, socket, user) => {
  try {
    const nouvelleDemande = new demande({
      demandeur: user.userId,
      active: true,
      typeDePartie: user.typeDePartie,
    });
    const created = await nouvelleDemande.save();
    if (!created) {
      return new Error(
        "Une erreur s'est produte lors de la création de la demande",
        { erreur: created }
      );
    } else {
      let fiveMin = 1000 * 60 * 5;
      let timer = setInterval(() => {
        if (fiveMin === 1000) {
          socket.emit("end_timer", "Compte à rebours terminé");
          console.clear();
          clearInterval(timer);
        } else {
          fiveMin -= 1000;
          socket.emit("timer", fiveMin);
          console.clear();
          console.log(fiveMin);
        }
      }, 1000);
      socket.emit("demande_is_created_and_active", created);
      io.to("le_jeu_de_garame").emit({
        message: `${
          user.prenom + " " + user.nom
        } est en attente d'un(e) adversaire.`,
      });
    }
  } catch (erreur) {
    console.clear();
    socket.emit("erreur_demande", erreur);
  }
};
