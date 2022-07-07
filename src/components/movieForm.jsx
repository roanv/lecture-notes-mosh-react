import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: { title: "", stock: "", rate: "", genre: "" },
    genres: [],
    errors: {},
    // genres: [],
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.number().required().label("Number in Stock"),
    rate: Joi.number().required().label("Daily Rental Rate"),
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;
    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.getViewData(movie) });
  }

  getViewData = (movie) => {
    return {
      id: movie.id,
      genre: movie.genre.id,
      title: movie.title,
      stock: movie.numberInStock,
      rate: movie.dailyRentalRate,
    };
  };

  submit = () => {
    saveMovie(this.props.data);
    this.props.history.push("/movies");
  };

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Movie {match.params.id}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", this.state.genres)}
          {this.renderInput("stock", "Number in Stock", "number")}
          {this.renderInput("rate", "Rate")}
          {this.renderSubmit("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
