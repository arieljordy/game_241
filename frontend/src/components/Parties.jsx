import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { socket } from "../services/socket";

export default function Parties() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.on("name", (name) => alert(name));
    socket.on("demande_is_created_and_active", (demandeIsActive) => {
      console.clear();
      console.log(demandeIsActive);
    });
    socket.on("end_timer", (message) => {
      console.clear();
      console.log(message);
    });
    socket.on("timer", (timer) => {
      console.clear();
      console.log(timer);
    });

    return () => {
      socket.off("demande_is_created_and_active");
      socket.off("timer");
      socket.off("name");
      socket.off("end_timer");
    };
  }, [socket]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-12 col-md-6 bg-bleu expand-block-res"
            style={{
              display: "flex",
              width: "60%",
              height: "100px",
              marginLeft: "20%",
              marginRight: "20%",
              flexDirection: "row",
              justifyContent: "center",
            }}>
            <button
              className="bg-blanc border-none element-bleu animate__animated animate__infinite animate__pulse animate__fast"
              onClick={() =>
                socket.emit("je_fais_une_demande", {
                  ...user,
                  typeDePartie: "solo",
                })
              }
              style={{
                padding: "10px",
                margin: "30px",
                borderRadius: "25px",
              }}>
              Nouvelle partie
            </button>
          </div>
          <div
            className="bg-gris expand-block-res"
            style={{
              minHeight: "100px",
              width: "60%",
              marginLeft: "20%",
              marginRight: "20%",
            }}>
            <ul>
              {["Jordy", "Chloé", "Lévy", "Padrel"].map((player, idx) => (
                <li key={idx} style={{ listStyleType: "none" }}>
                  {player}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
