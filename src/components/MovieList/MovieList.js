import React from "react";
import MovieCard from "../MovieCard/MovieCard.js";
import { Movies } from "../../mocks/Movies";

function MovieList() {
  return (
    <>
      {Movies.map((movie) => (
        <MovieCard
          title={movie.title}
          tagline={movie.tagline}
          key={movie.id}
          poster_path={movie.poster_path}
          year={movie.year}
        />
      ))}
    </>
  );
}

export default MovieList;
