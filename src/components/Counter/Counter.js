import React, { Component } from "react";
export class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(({ count }) => ({
      count: count - 1,
    }));
  };

  render() {
    return (
      <>
        Counter class based component: 
        <button onClick={this.handleDecrement}>-</button>
        {this.state.count}
        <button onClick={this.handleIncrement}>+</button>
      </>
    );
  }
}
