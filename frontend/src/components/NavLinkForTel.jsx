import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiCircleList } from "react-icons/ci";
import { RxDash } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

export default function NavLinkForTel() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const toogleShow = () => {
    setShowMore(!showMore);
  };

  const elements = [
    {
      text: "Voir plus",
      icon: <FaPlus className="element-bleu" />,
    },
    {
      text: "Masquer",
      icon: <RxDash className="element-bleu" />,
    },
  ];

  return (
    <>
      <div className="my-dropdown">
        <CiCircleList
          className="element-bleu btn-navigation-icon btn-navigation-icon-res"
          onClick={toggleOpen}
        />
        {isOpen && (
          <div
            className={`my-dropdown-content animate__backInLeft my-dropdown-content-res animate__animated`}>
            <Link to="/" className="element-bleu">
              Comment participer
            </Link>
            <br />
            <Link to="/" className="element-bleu">
              Les parties en cours
            </Link>
            <br />
            <Link to="/" className="element-bleu">
              Classement
            </Link>
            {/* <br />
            <Link to="/" className="element-bleu">
              Conseiller
            </Link>
            <br />
            <Link to="/" className="element-bleu">
              Enseignant
            </Link>
            <br />
            <Link to="/" className="element-bleu">
              Support
            </Link>
            <br />
            <Link
              to="/Recherche-de-financement-Appels-offres"
              className="element-bleu">
              <marquee>Recherche de financement & Appels d'offres</marquee>
            </Link> */}
            {/* <span
              onClick={toogleShow}
              className="con-tooltip cursor-pointer my-tooltip-bottom-res text-center element-bleu">
              {showMore ? (
                <>
                  <span className="me-2">{elements[1].text}</span>
                  <span>{elements[1].icon}</span>
                </>
              ) : (
                <>
                  <span className="me-2">{elements[0].text}</span>
                  <span>{elements[0].icon}</span>
                </>
              )}
              <div
                className={`my-tooltip-res ${
                  showMore ? "visibility-visible" : "visibility-hidden"
                }`}>
                <Link className="my-tooltip-link-res my-tooltip-link-element-res">
                  Étapes clés
                </Link>
                <Link className="my-tooltip-link-res my-tooltip-link-element-res">
                  Participant enregistré
                </Link>
                <Link className="my-tooltip-link-res my-tooltip-link-element-res">
                  Recherche de partenaire
                </Link>
              </div>
            </span> */}
          </div>
        )}
      </div>
    </>
  );
}
