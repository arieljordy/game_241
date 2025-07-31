import React from "react";

export default function InputText({ setEmail, email }) {
  return (
    <div className="my-4 mb-4">
      <label htmlFor="login" className="element-bleu">
        <b> votre adresse e-mail {/* ou numéro de téléphone*/} </b>
      </label>
      <input
        type="email"
        name="login"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        maxLength={30}
        required={true}
        className="input-line-login-text"
        placeholder="Adresse e-mail"
        //  ou numéro de téléphone
      />
    </div>
  );
}
