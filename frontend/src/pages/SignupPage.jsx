import React, { useState } from "react";
import FormSignup from "../components/FormSignup";
import Spinner from "../components/Spinner";

export default function SignupPage() {
  const [display, setDisplay] = useState(true);
  setTimeout(() => {
    setDisplay(false);
  }, 1000);
  return <>{display ? <Spinner visibility={display} /> : <FormSignup />}</>;
}
