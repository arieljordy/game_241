import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();
  const [user, setUser] = useState(null);
  const [alertMessageError, setAlertMessageError] = useState("");
  // n
  const logout = () => {
    cookies.remove("auth_player");
    setUser(null);
  };

  useEffect(() => {
    const token = cookies.get("auth_player");
    if (token) {
      const playerDatas = jwtDecode(token);
      playerDatas.token = token;
      setUser(playerDatas);
      alert("Utilisateur connecté");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        alertMessageError,
        setAlertMessageError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// export function hasAuth() {
//   const cookies = new Cookies();
//   let token = null;
//   for (let cookie in cookies.getAll()) {
//     if (cookie === "auth") {
//       token = cookies.get("auth");
//       break;
//     }
//   }
//   if (token !== null) {
//     const userDatas = jwtDecode(token);
//     return {
//       userOnline: true,
//       userId: userDatas.userId,
//       email: userDatas.email,
//       prenom: userDatas.prenom,
//       nom: userDatas.nom,
//       imageUrl: userDatas.imageUrl,
//       methodConnect: userDatas.methodConnect,
//       points: userDatas.points,
//       auth_token: token,
//     };
//   } else {
//     return {
//       userOnline: false,
//       player: null,
//     };
//   }
// }
