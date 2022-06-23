import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
    // imageUrl: "https://picsum.photos/200",
  };
  // generally use classes and avoid setting style directly
  //   styles = { fontSize: 10, fontWeight: "bold" };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {this.state.count}

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" />  */}
        {/* <span style={this.styles}> */}
        {/* <span className="badge bg-primary m-2"> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          //   onClick={this.handleIncrement}
          onClick={() => this.handleIncrement({ name: "bananas" })} // to pass arguments
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && <p>Please add a tag!</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    // return count === 0 ? <b>Zero</b> : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
