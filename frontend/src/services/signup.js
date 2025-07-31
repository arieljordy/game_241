export const signup = async (user, states) => {
  const { setVisibility, setMessage, setUser, setAlertMessageError, location } =
    states;
  const { email, password, passwordConfirm, nom, prenom } = user;
  setVisibility(true);
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        passwordConfirm,
        prenom,
        nom,
      }),
      credentials: "include",
    };
    const response = await fetch(
      `http://localhost:5000/api/visiteur/signup`,
      options
    );
    const data = await response.json();
    if (data.status === 201) {
      setMessage(data.message);
      setUser({ ...data.playerDatas, token: data.xcrsf });
      setVisibility(false);
      location("/");
    } else {
      setAlertMessageError(data.message);
    }
  } catch (erreur) {
    console.clear();
    console.error(erreur);
    setAlertMessageError("Une erreur s'est produite");
  } finally {
    setTimeout(() => {
      setVisibility(false);
    }, 1000);
  }
};
