import React, { useContext, useState } from "react";
import "../assets/css/component-header.css";
import "../assets/css/component-tooltip.css";
import { Link, useNavigate } from "react-router-dom";
import NavLinkForTel from "./NavLinkForTel";
import { FaUser } from "react-icons/fa";
import OffCanvas from "./OffCanvas";
import FormLogin from "./FormLogin";
import { AuthContext } from "../contexts/AuthContext";
import Modal from "./Modal";
import Person from "./Person";
import { menu } from "../services/menu";

export default function Header() {
  const [showCanvas, setShowCanvas] = useState(false);
  const [centredModal, setCentredModal] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const location = useNavigate();

  return (
    <>
      <header className="bg-blanc header-container">
        <Link to="/" className="logo-container text-uppercase element-bleu">
          Game 241
        </Link>
        <div>
          <div className="navigation-container navigation-container-res">
            <div className="container-nav-link mt-3">
              <button
                onClick={() => location("/comment-participer")}
                className="style-nav-link border-none">
                Comment participer
              </button>
              <button
                onClick={() => {
                  user ? location("/parties-en-cours") : setCentredModal(true);
                }}
                className="style-nav-link mx-5 border-none">
                Les parties en cours
              </button>
              <button
                onClick={() =>
                  user ? location("/classements") : setCentredModal(true)
                }
                className="style-nav-link border-none">
                Classement
              </button>
            </div>
            {/* <div className="container-nav-link">
              <Link to="/" className="style-nav-link">
                Conseiller
              </Link>
              <Link to="/" className="style-nav-link mx-5">
                Enseignant
              </Link>
              <Link to="/" className="style-nav-link">
                Support
              </Link>
            </div> */}
            {/* <Link
              to="/Recherche-de-financement-Appels-offres"
              className="style-nav-link con-tooltip my-tooltip-bottom text-center">
              Recherche de financement & Appels d'offres
              <div className="my-tooltip">
                <Link
                  className="my-tooltip-link my-tooltip-link-element"
                  to="">
                  Étapes clés
                </Link>
                <Link className="my-tooltip-link my-tooltip-link-element">
                  Participant enregistré
                </Link>
                <Link className="my-tooltip-link my-tooltip-link-element">
                  Recherche de partenaire
                </Link>
              </div>
            </Link> */}
          </div>
          <NavLinkForTel />
        </div>
        {user ? (
          <button
            className="border-none bg-trans"
            onClick={() => {
              setShowCanvas(true);
            }}>
            <Person person={user} />
          </button>
        ) : (
          <>
            <button
              className="bg-bleu element-blanc btn-header-connected btn-header-connected-res"
              onClick={() => {
                setShowCanvas(true);
              }}>
              S'identifier
            </button>
            <FaUser
              className="element-bleu btn-header-connnected-icon btn-header-connnected-icon-res"
              onClick={() => setShowCanvas(true)}
            />
          </>
        )}
      </header>
      <OffCanvas
        titre={
          user
            ? "Salut " + user.prenom + " " + user.nom.toUpperCase()
            : "S'identifier"
        }
        declencheur={showCanvas}
        setShow={setShowCanvas}
        show={showCanvas}>
        {user ? (
          menu.map((elem, idx) => (
            <li
              key={idx}
              className="my-4"
              style={{ listStyleType: "none", marginLeft: "10px" }}>
              <button
                className="border-none bg-trans"
                onClick={() => {
                  if (idx === menu.length - 1) {
                    location("/");
                    logout();
                    setShowCanvas(false);
                  } else {
                    location(`/${elem.link}`);
                  }
                }}>
                {
                  <>
                    <>{elem.icon}</>
                    <span className="element-bleu" style={{ fontSize: "20px" }}>
                      {elem.text}
                    </span>
                  </>
                }
              </button>
            </li>
          ))
        ) : (
          <FormLogin
            setCentredModal={setCentredModal}
            centredModal={centredModal}
            setShowCanvas={setShowCanvas}
            showCanvas={showCanvas}
          />
        )}
      </OffCanvas>
      <Modal
        centredModal={centredModal}
        setCentredModal={setCentredModal}
        titre="Vous n'êtes pas connecté(e)">
        <FormLogin
          setCentredModal={setCentredModal}
          centredModal={centredModal}
        />
      </Modal>
    </>
  );
}
