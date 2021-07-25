import React from "react";
import styles from "./HotelInformation.module.css";

const HotelInformation = (props) => {
  let stars = null;
  let partialStars = null;
  const rating = Math.floor(props.rating);

  // logos to represent rating
  stars = [...Array(rating)].map((_, i) => {
    return <div className={styles.stars} key={i}></div>;
  });

  //Half logos in case of decimal points in rating
  if (props.rating % 1 > 0) {
    partialStars = <div className={styles.partialStars}></div>;
  }
  return (
    <div className={styles.HotelInfo}>
      <h3 className={styles.Name}>{props.name}</h3>
      {diamonds}
      {halfDiamonds}
      <p className={styles.RoomType}>
        <strong>Type:</strong> {props.roomType}
      </p>
    </div>
  );
};

export default HotelInformation;
