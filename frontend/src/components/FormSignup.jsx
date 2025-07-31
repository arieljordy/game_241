import React, { useState, useContext, useEffect } from "react";
import "../assets/css/component-signup-form.css";
import Modal from "./Modal";
import FormLogin from "./FormLogin";
import InputPasswordSignup from "./InputPasswordSignup";
import { signup } from "../services/signup";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
// import Select from "../components/Select";

export default function FormSignup() {
  const [centredModal, setCentredModal] = useState(false);
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [masquerMsg, setMasquerMsg] = useState(false);
  const [displayMsgResponse, setDisplayMsgResponse] = useState(null);
  const [alertMessageError, setAlertMessageError] = useState("");
  const { setUser } = useContext(AuthContext);
  const location = useNavigate();

  useEffect(() => {
    if (message !== "") {
      setDisplayMsgResponse("success");
      setTimeout(() => {
        setMasquerMsg(true);
        setMessage("");
      }, 10000);
    } else {
      setMasquerMsg(false);
      setDisplayMsgResponse(null);
    }
    if (alertMessageError.length > 0) {
      setDisplayMsgResponse("erreur");
      setTimeout(() => {
        setMasquerMsg(true);
        setAlertMessageError("");
      }, 10000);
    } else {
      setMasquerMsg(false);
      setDisplayMsgResponse(null);
    }
  }, [message, alertMessageError]);

  return (
    <>
      {visibility ? (
        <Spinner visibility={visibility} />
      ) : (
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            signup(
              { nom, prenom, email, password, passwordConfirm },
              {
                setMessage,
                setVisibility,
                setAlertMessageError,
                setUser,
                location,
              }
            );
          }}
          className="my-form-signup my-3 margin-auto animate__animated animate__backInLeft animate__repeat-1">
          <p className="my-title-form-signup">Créer un compte</p>
          <p className="my-message-form-signup element-noir">
            Inscrivez-vous maintenant et obtenez un accès complet à la
            plateforme.
          </p>
          {displayMsgResponse === "success" && displayMsgResponse !== null ? (
            <p
              className={`text-center text-success ${
                masquerMsg ? "d-none" : ""
              }`}>
              {message}
            </p>
          ) : (
            <p
              className={`text-center text-danger ${
                masquerMsg ? "d-none" : ""
              }`}>
              {alertMessageError}
            </p>
          )}
          <div className="flex">
            <label>
              <input
                className="my-input-form-signup"
                type="text"
                value={prenom}
                onChange={(evt) => setPrenom(evt.target.value)}
                placeholder=""
                required
              />
              <span>Prénom</span>
            </label>

            <label>
              <input
                className="my-input-form-signup"
                type="text"
                value={nom}
                onChange={(evt) => setNom(evt.target.value)}
                placeholder=""
                required
              />
              <span>Nom</span>
            </label>
          </div>
          <label>
            <input
              className="my-input-form-signup"
              type="email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              placeholder=""
              required
            />
            <span>
              Adresse Email
              {/* ou Numéro de téléphone */}
            </span>
          </label>
          {/* <Select
          group="Type de compte"
          array={["Entrepreneur", "Freelance", "Joueur"]}
        /> */}
          <InputPasswordSignup
            textLabel="votre mot de passe entre [8-30] caractères"
            mdp={password}
            setMdp={setPassword}
          />
          <InputPasswordSignup
            textLabel="Confirmation du mot de passe"
            mdp={passwordConfirm}
            setMdp={setPasswordConfirm}
          />
          <div className="flex">
            <button
              className="my-btn-form-signup bg-orange element-noir"
              onClick={() => {
                setPasswordConfirm("");
                setPassword("");
                setNom("");
                setPrenom("");
                setEmail("");
              }}
              type="reset">
              effacer
            </button>
            <button
              className="my-btn-form-signup bg-bleu element-blanc"
              type="submit">
              inscription
            </button>
          </div>
          <p className="signin element-noir">
            Possédez-vous déjà un compte?
            <input
              value="Se Connecter"
              type="button"
              className="bg-trans border-none element-bleu"
              onClick={() => setCentredModal(true)}
            />
          </p>
        </form>
      )}
      <Modal
        centredModal={centredModal}
        setCentredModal={setCentredModal}
        titre="Vous n'êtes pas connecté(e)">
        <FormLogin
          centredModal={centredModal}
          setCentredModal={setCentredModal}
        />
      </Modal>
    </>
  );
}
