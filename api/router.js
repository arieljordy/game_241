const app = require("./app");
const routesVisitor = require("./routes/rt-visitor");

const routerApp = () => {
  // authentifications et inscriptions
  app.use("/api/visiteur", routesVisitor);
};
// const router = [
//   // authentifications et inscriptions
//   app.use("/api/visiteur", routesVisitor);
// ];
module.exports = routerApp;
