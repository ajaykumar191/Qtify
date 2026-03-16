import React from "react";
import styles from "./Navbar.module.css";

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <div className={styles.searchWrapper}>
        <Search />
      </div>

      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;