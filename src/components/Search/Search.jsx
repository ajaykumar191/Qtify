import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.search}
        placeholder="Search a album of your choice"
      />
      <button className={styles.searchButton}>
        🔍
      </button>
    </div>
  );
};

export default Search;