import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, api }) => {

  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(api);
      console.log(res);
      
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.section}>

      <div className={styles.header}>
        <h2>{title}</h2>

        <span
          className={styles.toggle}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show All"}
        </span>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              follows={item.follows}
              title={item.title}
            />
          ))}
        </div>
      ) : (
        <Carousel
          data={data}
          renderComponent={(item) => (
            <Card
              image={item.image}
              follows={item.follows}
              title={item.title}
            />
          )}
        />
      )}

    </div>
  );
};

export default Section;