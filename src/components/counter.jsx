import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  handleIncrement = () => {
    this.setState( {count: this.state.count +1 })
  }
  resetCounter = () => {
    this.setState( {count: 0 })
  }

  render() {
    return (
      <>
        <span style = {{fontSize: 70}}className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-lg"
        >
          Increment
        </button>
        <button
          onClick={this.resetCounter}
          className="btn btn-primary btn-lg"
          style={{margin: 10}}
        >
          Reset
        </button>
      </>
    );
  }

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
