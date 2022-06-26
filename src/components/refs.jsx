import React, { Component } from "react";

// if you REALLY need to access the DOM
// Avoid using this unless you need to
//

class LoginForm extends Component {
  username = React.createRef(); // HERE

  componentDidMount() {
    this.username.current.focus(); // HERE
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            autoFocus // better way to do this
            ref={this.username} // HERE
            id="username"
            type="text"
            className="form-control"
          />
        </div>
      </form>
    );
  }
}
