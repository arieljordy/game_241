import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "animate.css";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root-app"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
