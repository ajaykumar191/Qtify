import React, { useEffect, useState } from "react";
import axios from "axios";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import styles from "./Songs.module.css";

import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const Songs = () => {

  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {

    const fetchSongs = async () => {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );
      setSongs(res.data);
    };

    const fetchGenres = async () => {
      const res = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );
      setGenres(res.data.data);
    };

    fetchSongs();
    fetchGenres();

  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <div className={styles.section}>

      <h2 className={styles.title}>Songs</h2>

      <Tabs
        value={selectedGenre}
        onChange={handleTabChange}
        className={styles.tabs}
      >

        <Tab label="All" value="all" />

        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}

      </Tabs>

      <Carousel
        data={filteredSongs}
        renderComponent={(song) => (
          <Card
            image={song.image}
            title={song.title}
            likes={song.likes}
          />
        )}
      />

    </div>
  );
};

export default Songs;