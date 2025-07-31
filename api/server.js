const dotenv = require("dotenv");
dotenv.config();
const env = process.env;
const app = require("./app");
// const os = require("node:os");
const session = require("express-session");
const protocole = require(`node:${
  env.NODE_ENV === "developpement" ? "http" : "https"
}`);
const fs = require("fs");
const { Server } = require("socket.io");
const { createDemande } = require("./websocket/demande");

const server = protocole.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["*", process.env.DOMAIN_FRONTEND], // Autorise toutes les origines (à modifier en production)
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  },
  pingTimeout: 1000 * 60 * 20,
  pingInterval: 5000,
});

const sessionMiddleware = session({
  secret: env.KEY_EXPRESS_SESSION,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 8 * 1000 * 60 * 60,
  },
});

app.use(sessionMiddleware);

io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res || {}, next);
});

// Gestion des connexions Socket.io
io.on("connection", (socket) => {
  const auth = socket.handshake.auth;
  if (auth) {
    // Gérer les événements personnalisés ici
    console.log("Un utilisateur s'est connecté:", socket.id);
    socket.on("je_fais_une_demande", (user) => {
      createDemande(io, socket, { ...user });
    });
  } else {
    socket.emit("auth_error", {
      status: "error",
      code: "UNAUTHORIZED",
      message: "Authentification requise, Le token manquant ou invalide.",
    });
    socket.disconnect(true);
    return;
  }

  socket.on("disconnect", () => {
    console.log("Un utilisateur s'est déconnecté:", socket.id);
  });
});

const PORT = env.PORT || 5000;
server.listen(PORT, () => {
  console.clear();
  console.log(`Serveur en écoute sur le port ${PORT}`);
  // console.log(env.NODE_ENV === "developpement" ? "http" : "https");
});
