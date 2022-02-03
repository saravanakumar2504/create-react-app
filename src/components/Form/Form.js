import React, { Component } from "react";
import "./Form.css";
export class Form extends Component {
  render() {
    return (
      <div>
        <input type="text" className="search" placeholder="Search here !" />
        <input type="submit" className="submit" value="Search" />
      </div>
    );
  }
}

export default Form;
