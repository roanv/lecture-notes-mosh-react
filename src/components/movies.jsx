import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ id: "all", name: "All" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movieId) => {
    deleteMovie(movieId);
    this.setState({ movies: getMovies() });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => this.setState({ currentPage: page });

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData() {
    const {
      selectedGenre,
      movies: allMovies,
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre.id != "all"
        ? allMovies.filter((m) => m.genre.id === selectedGenre.id)
        : allMovies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const moviesOnPage = paginate(sortedMovies, currentPage, pageSize);

    return { count: filteredMovies.length, data: moviesOnPage };
  }

  render() {
    const {
      selectedGenre,
      genres,
      movies: allMovies,
      pageSize,
      currentPage,
      sortColumn,
    } = this.state;

    if (allMovies.length === 0) return <p>No movies found.</p>;

    const { count, data: movies } = this.getPagedData();

    return (
      <div className="row justify-content-center">
        <div className="col-md-2">
          <div className="mx-4">
            <ListGroup
              items={genres}
              onItemSelect={this.handleGenreSelect}
              selectedItem={selectedGenre}
            ></ListGroup>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row">
            <MoviesTable
              movies={movies}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
          </div>
          <div className="row">
            <div className="d-flex justify-content-end">
              <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="row mx-4">
            <Link to="/movies/new" className="btn btn-primary">
              New Movie
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
