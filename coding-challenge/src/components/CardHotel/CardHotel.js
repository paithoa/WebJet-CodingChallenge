import React from "react";
import styles from "./CardHotel.module.css";
import HotelInformation from "./HotelInformation/HotelInformation";

const CardHotel = (props) => {
  return (
    <div className={styles.HotelCard}>
      <img src={props.details.imgSrc} alt="HotelImage"></img>
      <HotelInformation
        name={props.details.hotelName}
        rating={props.details.rating}
        roomType={props.details.roomType}
      />
      <div className={styles.Price}>
        <h1>${props.details.price}</h1>
      </div>
      <div className={styles.Button}>
        <div className={styles.RightArrow}></div>
      </div>
    </div>
  );
};

export default CardHotel;
