import React, { Component } from "react";
import { deleteMovie, getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import SearchBox from "./common/searchBox";
import MoviesTable from "./moviesTable";
import _, { filter } from "lodash";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    searchQuery: "",
    selectedGenre: null,
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
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
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
      searchQuery,
    } = this.state;

    let filteredMovies = allMovies;
    if (searchQuery)
      filteredMovies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre.id)
      filteredMovies = allMovies.filter((m) => m.genre.id === selectedGenre.id);

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const moviesOnPage = paginate(sortedMovies, currentPage, pageSize);

    return { count: filteredMovies.length, data: moviesOnPage };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  render() {
    const {
      selectedGenre,
      genres,
      movies: allMovies,
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
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
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
          </div>
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
