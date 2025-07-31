import React, { useContext, useEffect, useState } from "react";
import "../assets/css/component-formlogin.css";
import InputText from "./InputText";
import InputPassword from "./InputPassword";
import { Link, useNavigate } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { signin } from "../services/signin";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "./Spinner";

export default function FormLogin({
  setCentredModal,
  centredModal,
  setShowCanvas,
  showCanvas,
}) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayMsgResponse, setDisplayMsgResponse] = useState(null);
  const [masquerMsg, setMasquerMsg] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [alertMessageError, setAlertMessageError] = useState("");
  const { setUser } = useContext(AuthContext);
  const location = useNavigate();

  // const estValide=(valeur)=>{
  //     // Validation de l'email
  //     if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(valeur)) {
  //       return true;
  //     }

  //     // Validation du numéro de téléphone (format français)
  //     if (/^(0|[+]33)[0-9]{9}$/.test(valeur)) {
  //       return true;
  //     }

  //     // Si ni email ni numéro de téléphone valide
  //     return false;
  //   }
  useEffect(() => {
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
  }, [alertMessageError, message]);

  return !visibility ? (
    <>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          signin(
            { email, password },
            {
              setMessage,
              setVisibility,
              setAlertMessageError,
              setUser,
              setCentredModal,
              centredModal,
            }
          );
        }}>
        <InputText setEmail={setEmail} email={email} />
        <InputPassword setPassword={setPassword} password={password} />
        <div style={styleContainerBtnForm}>
          <button
            onClick={() => {
              setEmail("");
              setPassword("");
            }}
            className="border-none me-3 bg-orange element-noir btn-form-login btn-form-login-reset"
            type="reset">
            effacer
          </button>
          <button
            className="border-none me-3 bg-bleu element-blanc btn-form-login btn-form-login-submit"
            type="submit">
            connexion
          </button>
        </div>
        <br />
        <br />
        <p className="text-align-justify element-noir">
          En vous identifiant, vous acceptez{" "}
          <Link to="/">nos conditions générales.</Link> Veuillez consulter{" "}
          <Link to="/">
            notre Notice Protection de vos informations personnelles.
          </Link>{" "}
          Notre Notice Cookies et notre notice Annonces publicitaires basées sur
          vos centres d'intérêt.
        </p>
      </form>
      <HiChevronRight className="element-bleu me-2" />
      <button
        className="bg-trans border-none element-bleu"
        onClick={() => {
          if (showCanvas) {
            setShowCanvas(false);
          }
          location("/creer-un-compte");
        }}>
        Je n'ai pas de compte
      </button>
      {displayMsgResponse === "success" && displayMsgResponse !== null ? (
        <p
          className={`text-center text-success ${masquerMsg ? "d-none" : ""} `}>
          {message}
        </p>
      ) : (
        <p className={`text-center text-danger ${masquerMsg ? "d-none" : ""}`}>
          {alertMessageError}
        </p>
      )}
    </>
  ) : (
    <Spinner visibility={visibility} />
  );
}

const styleContainerBtnForm = {
  position: "relative",
};
