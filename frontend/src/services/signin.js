export const signin = async (userData, states) => {
  const { email, password } = userData;
  const {
    setVisibility,
    setMessage,
    setUser,
    setAlertMessageError,
    setCentredModal,
    centredModal,
  } = states;
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
      }),
      credentials: "include",
    };
    const response = await fetch(
      `http://localhost:5000/api/visiteur/signin`,
      options
    );
    const data = await response.json();
    if (data.status === 200) {
      setMessage(data.message);
      setUser({ ...data.playerDatas, token: data.xcrsf });
      setVisibility(false);
      if (centredModal) {
        setCentredModal(false);
      }
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
