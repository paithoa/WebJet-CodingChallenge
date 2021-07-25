import React from "react";
import WebJetLogo from "../WebJetLogo/WebJetLogo";
import MobileHamburger from "../MobileHamburger/MobileHamburger";

import styles from "./Layout.module.css";

const Layout = () => (
  <header className={styles.Toolbar}>
    <div className={styles.Menu}>
      <MobileHamburger />
    </div>
    <div className={styles.Logo}>
      <WebJetLogo />
    </div>
  </header>
);

export default Layout;
