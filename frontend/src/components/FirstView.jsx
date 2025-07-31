import React, { useState, useContext } from "react";
import "../assets/css/component-first-view.css";
import Modal from "./Modal";
import FormLogin from "./FormLogin";
import bgImg from "../assets/images/bg_image_project.jpg";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function FirstView() {
  const [centredModal, setCentredModal] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useNavigate();

  return (
    <>
      <div
        className="p-5 text-center bg-image"
        style={{ backgroundImage: `url(${bgImg})`, height: "400px" }}>
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3 animate__animated animate__slideInUp animate__repeat-1">
                Garame
              </h1>
              <h4 className="mb-3">Venez défier d'autres joueurs</h4>
              <button
                className="bg-trans element-blanc animate__animated animate__pulse animate__infinite my-btn-call-to-action"
                onClick={() => {
                  user ? location("/parties-en-cours") : setCentredModal(true);
                }}>
                Jouer
              </button>
            </div>
          </div>
        </div>
      </div>
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
