import React from "react";
import Search from "../Search/Search";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="top-header">
        <span>
          netflix<span className="roulette">roulette</span>
        </span>
        <button type="submit" className="addMovie" value="+ ADD MOVIE">
          + ADD MOVIE
        </button>
      </div>
      <span className="findTitle">FIND YOUR MOVIE</span>
      <Search />
    </div>
  );
}

export default Header;
