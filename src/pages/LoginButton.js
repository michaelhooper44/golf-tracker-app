import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogoutButton.module.css";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={styles['logout-button']} onClick={() => loginWithRedirect()}>Log In/Create Account</button>;
};

export default LoginButton;