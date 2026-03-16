import styles from "./Hero.module.css";
import headphones from "../../assets/headphones.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div className={styles.heroImage}>
        <img src={headphones} alt="headphones" />
      </div>
    </div>
  );
};

export default Hero;