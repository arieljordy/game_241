import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function InputPassword({ setPassword, password }) {
  const [inputType, setInputType] = useState("password");
  const toogleType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <div className="my-4 mb-3">
      <label htmlFor="mdp" className="element-bleu">
        <b>votre mot de passe entre [8-30] caractères</b>
      </label>
      <input
        type={inputType}
        name="mdp"
        className="input-line-login"
        minLength={8}
        value={password}
        required={true}
        onChange={(evt) => setPassword(evt.target.value)}
        maxLength={30}
        placeholder="saisir le mot de passe"
      />
      {inputType === "password" ? (
        <FaEye className="toogle-type-input" onClick={toogleType} />
      ) : (
        <FaEyeSlash className="toogle-type-input" onClick={toogleType} />
      )}
    </div>
  );
}
