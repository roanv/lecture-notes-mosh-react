import { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    const { error } = result;
    if (!error) return null;
    const errors = {};
    error.details.map((item) => (errors[item.path[0]] = item.message));
    return errors;
  };

  validateProperty = ({ id, value }) => {
    const input = { [id]: value };
    const schema = { [id]: this.schema[id] };
    const { error } = Joi.validate(input, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.submit();
  };

  // handleChange = (event) => {
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const error = this.validateProperty(input);
    if (error) errors[input.id] = error;
    else delete errors[input.id];

    const data = { ...this.state.data };
    data[input.id] = input.value;
    this.setState({ data, errors });
  };

  renderSubmit(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(id, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        // autoFocus
        id={id}
        label={label}
        onChange={this.handleChange}
        value={data[id]}
        error={errors[id]}
      />
    );
  }
}

export default Form;
