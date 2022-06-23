import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };
  // generally use classes and avoid setting style directly
  styles = { fontSize: 10, fontWeight: "bold" };
  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" />  */}
        {/* <span style={this.styles}> */}
        <span style={this.styles} className="badge bg-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <b>Zero</b> : count;
  }
}

export default Counter;
