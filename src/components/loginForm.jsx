import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const { username, password } = this.state.account;
    const errors = {};
    if (username.trim() === "") errors.username = "Username is required.";
    if (password.trim() === "") errors.password = "Password is required.";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ id, value }) => {
    if (id == "username")
      if (value.trim() === "") return "Username is required.";
    if (id == "password")
      if (value.trim() === "") return "Password is required.";
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    // call server
  };

  // handleChange = (event) => {
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const error = this.validateProperty(input);
    if (error) errors[input.id] = error;
    else delete errors[input.id];

    const account = { ...this.state.account };
    account[input.id] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <Input
              autoFocus
              id="username"
              label="Username"
              onChange={this.handleChange}
              value={account.username}
              error={errors.username}
            />
            <Input
              id="password"
              label="Password"
              onChange={this.handleChange}
              value={account.password}
              error={errors.password}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
