import React from "react";
import advertisement from "../../assets/ad.png";

import styles from "./Ad.module.css";

const Advertisement = () => (
  <div className={styles.Ad}>
    <img src={advertisement} alt="Ad"></img>
  </div>
);

export default Advertisement;
