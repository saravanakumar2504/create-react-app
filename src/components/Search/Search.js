import React, { Component } from "react";
import "./Search.css";
export class Search extends Component {
  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="input"
          placeholder="What do you want to watch ?"
        />
        <input type="submit" className="submit" value="SEARCH" />
      </div>
    );
  }
}

export default Search;
