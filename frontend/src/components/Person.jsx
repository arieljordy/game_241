import React, { useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";

export default function Person({ person }) {
  //   const { color } = useContext(AuthContext);
  const [imageLoaded, setImageLoaded] = useState(false); // Etat pour vérifier si l'image est chargée
  const [imageError, setImageError] = useState(false); // Etat pour vérifier si l'image a échoué à se charger

  // Handler appelé quand l'image est correctement chargée
  const handleImageLoad = () => {
    setImageLoaded(true); // L'image est bien chargée
  };

  // Handler appelé quand l'image échoue à se charger
  const handleImageError = () => {
    setImageError(true); // L'image n'a pas pu être chargée
  };

  return (
    <>
      {person.userImage && !imageError ? (
        <img
          src={person.userImage}
          className="person-media-img"
          alt="avatar_user_online"
          style={{ cursor: "pointer" }}
          onLoad={handleImageLoad} // Déclenchement quand l'image se charge
          onError={handleImageError} // Déclenchement quand l'image échoue à se charger
        />
      ) : (
        !imageLoaded && (
          <div
            className={`text-uppercase person-media-img`}
            style={{
              cursor: "pointer",
              backgroundColor: person.color || "pink",
              color: "#f8f8f8",
              // height: "100%",
              // width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              borderRadius: "50%",
              fontSize: "150%",
            }}>
            {/* Affiche les initiales de la personne comme fallback */}
            {person.prenom.charAt(0) + person.nom.charAt(0)}
          </div>
        )
      )}
    </>
  );
}
