import Cookies from "universal-cookie";
import { io } from "socket.io-client";

const cookies = new Cookies();
const token = cookies.get("auth_player") ? cookies.get("auth_player") : null;
const URL = /*process.env.REACT_APP_PUBLIC_URL || */ "http://localhost:5000";

export let socket = io(URL, {
  autoConnect: true,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 2000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
  forceNew: false,
  transports: ["websocket", "polling"],
  pingTimeout: 1000 * 60 * 30,
  pingInterval: 5000,
  auth: {
    token,
  },
});

socket.on("connect", () => {
  console.log("Connecté au serveur Socket.IO");
  startInactivityTimer();
});

socket.on("disconnect", (reason) => {
  console.log("Déconnecté du serveur Socket.IO. Raison:", reason);
  stopInactivityTimer();
});

socket.on("reconnect_attempt", (attemptNumber) => {
  console.log(`Tentative de reconnexion #${attemptNumber}`);
});

socket.on("reconnect_failed", () => {
  console.log("Échec de la reconnexion");
});

// Déconnexion automatique après inactivité
let inactivityTimer;

const startInactivityTimer = () => {
  inactivityTimer = setTimeout(() => {
    console.log("Déconnexion automatique due à l'inactivité");
    socket.disconnect();
  }, 1000 * 60 * 30); // 30 minutes d'inactivité
};

const stopInactivityTimer = () => {
  clearTimeout(inactivityTimer);
};

// Réinitialiser le timer à chaque événement reçu
socket.onAny(() => {
  stopInactivityTimer();
  startInactivityTimer();
});

// Réinitialiser le timer à chaque envoi d'événement
const originalEmit = socket.emit;
socket.emit = function (event, ...args) {
  stopInactivityTimer();
  startInactivityTimer();
  originalEmit.apply(socket, [event, ...args]);
};
