import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

const Card = ({ image, title, follows, likes }) => {

  const chipLabel = follows
    ? `${follows} Follows`
    : `${likes} Likes`;

  return (
    <div className={styles.card}>

      <div className={styles.imageContainer}>
        <img src={image} alt={title} />

        <div className={styles.chip}>
          <Chip label={chipLabel} size="small" />
        </div>
      </div>

      <div className={styles.title}>
        {title}
      </div>

    </div>
  );
};

export default Card;