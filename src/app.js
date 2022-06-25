import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import Rentals from "./components/rentals";
import Customers from "./components/customers";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id != counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // const counters = this.state.counters.map((c) => {
    //   if (c.id === counter.id) c.value++;
    // });
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    // const counters = this.state.counters.map((c) => {
    //   if (c.id === counter.id) c.value++;
    // });
    if (counter.value < 1) return;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <main className="container mt-4">
        <Switch>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect exact from="/" to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    );
  }
}

export default App;
