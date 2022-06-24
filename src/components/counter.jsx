import React, { Component } from "react";

class Counter extends Component {
  // component with no state = controlled component

  // state = {
  //   value: this.props.counter.value,
  // tags: ["tag1", "tag2", "tag3"],
  // imageUrl: "https://picsum.photos/200",
  // };
  // generally use classes and avoid setting style directly
  //   styles = { fontSize: 10, fontWeight: "bold" };
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   handleIncrement() {this.state.count}

  // handleIncrement = (product) => {
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    const { onDelete, onIncrement, counter } = this.props;
    return (
      <div className="col">
        {/* <img src={this.state.imageUrl} alt="" />  */}
        {/* <span style={this.styles}> */}
        {/* <span className="badge bg-primary m-2"> */}
        {/* this.props.children renders h4 counter # from counters.jsx */}
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses(counter)}>
          {this.formatCount(counter)}
        </span>
        <button
          //   onClick={this.handleIncrement}
          // onClick={() => this.handleIncrement({ name: "bananas" })} // to pass arguments
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && <p>Please add a tag!</p>} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses(counter) {
    let classes = "badge m-2 bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(counter) {
    // const { value: count } = this.state;
    const { value } = counter;
    // return count === 0 ? <b>Zero</b> : count;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
