import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = (counterId) => {
    const result = this.state.counters.filter(
      (counter) => counter.id != counterId
    );
    this.setState({ counters: result });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            // onDelete={this.handleDelete}
            onDelete={() => this.handleDelete(counter.id)}
            key={counter.id}
            value={counter.value}
            id={counter.id}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
