import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard(props) {
  return (
    <div className="MovieCard">
      <img width="323px" height="486px" src={props.poster_path} alt="poster" />
      <div className="description">
        <div className="movieTitle">
          <h4>{props.title}</h4>
          <p>{props.tagline}</p>
        </div>
        <h3 className="movieYear">{props.year}</h3>
      </div>
    </div>
  );
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  image: PropTypes.string,
  year: PropTypes.string.isRequired,
};
export default MovieCard;
