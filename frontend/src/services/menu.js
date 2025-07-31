import { FaPowerOff, FaUser, FaUnlock } from "react-icons/fa";
import { IoNotifications, IoWallet } from "react-icons/io5";

export const menu = [
  {
    icon: (
      <FaUser
        className="element-bleu cursor-pointer"
        style={{ fontSize: "35px", marginRight: "20px" }}
      />
    ),
    text: "Mon profil",
    link: "mon-profil",
  },
  {
    icon: (
      <FaUnlock
        className="element-bleu cursor-pointer"
        style={{ fontSize: "35px", marginRight: "20px" }}
      />
    ),
    text: "Changer de mot de passe",
    link: "changer-de-mot-de-passe",
  },
  {
    icon: (
      <IoNotifications
        className="element-bleu cursor-pointer"
        style={{ fontSize: "35px", marginRight: "20px" }}
      />
    ),
    text: "Notifications",
    link: "notifications",
  },
  {
    icon: (
      <IoWallet
        className="element-bleu cursor-pointer"
        style={{ fontSize: "35px", marginRight: "20px" }}
      />
    ),
    text: "Portefeuille",
    link: "portefeuille",
  },
  {
    icon: (
      <FaPowerOff
        className="element-bleu cursor-pointer"
        style={{ fontSize: "35px", marginRight: "20px" }}
      />
    ),
    text: "Me déconnecter",
  },
];
