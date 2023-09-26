import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const returnToUrl = "https://localhost:3000/welcome";

  return (
    <button className={styles['logout-button']}onClick={() => logout({ returnTo: returnToUrl }) }>
      Log Out
    </button>
  );
};

export default LogoutButton;