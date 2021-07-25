import React from "react";
import WebjetLogo from "../../assets/logo.jpg";

import styles from "./WebJetLogo.module.css";

const WebJetLogo = () => (
  <img className={styles.LogoImage} src={WebjetLogo} alt="Webjet"></img>
);

export default WebJetLogo;
