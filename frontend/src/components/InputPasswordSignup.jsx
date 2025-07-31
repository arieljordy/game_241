import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function InputPasswordSignup({ textLabel, mdp, setMdp }) {
  const [inputType, setInputType] = useState("password");
  const toogleType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <>
      <label>
        <input
          className="my-input-form-signup"
          type={inputType}
          value={mdp}
          onChange={(evt) => setMdp(evt.target.value)}
          placeholder=""
          required
          minLength={8}
          maxLength={30}
        />
        <span>{textLabel} </span>
        {inputType === "password" ? (
          <FaEye style={styleEyeSignup} onClick={toogleType} />
        ) : (
          <FaEyeSlash style={styleEyeSignup} onClick={toogleType} />
        )}
      </label>
    </>
  );
}

const styleEyeSignup = {
  fontSize: "23px",
  color: "#000",
  position: "absolute",
  right: "5px",
  top: "15px",
  cursor: "pointer",
};
