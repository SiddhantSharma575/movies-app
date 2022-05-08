import React, { Component } from "react";
// import { movies } from "../movieData";
import axios from "axios";

export class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      hover: "",
      parr: [1],
      movies: [],
      currPage: 1,
      favourites: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e9220e3b57308e0f3810a78e3598fcae&language=en-US&page=${this.state.currPage}`
    );
    let movieData = res.data;
    console.log(movieData);

    this.setState({
      movies: [...movieData.results],
    });

    console.log("mounting done with CDM third");
  }

  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e9220e3b57308e0f3810a78e3598fcae&language=en-US&page=${this.state.currPage}`
    );
    let movieData = res.data;
    console.log(movieData);

    this.setState({
      movies: [...movieData.results],
    });
  };

  handleNext = () => {
    let tempArr = [];
    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      tempArr.push(i);
    }

    this.setState(
      {
        parr: [...tempArr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    );
  };

  handlePrevious = () => {
    if (this.state.parr.length != 1) {
      let tempArr = [];
      for (let i = 1; i < this.state.parr.length; i++) {
        tempArr.push(i);
      }
      this.setState(
        {
          parr: [...tempArr],
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
    }
  };

  handlePageClick = (value) => {
    if (value !== this.state.currPage) {
      this.setState(
        {
          currPage: value,
        },
        this.changeMovies
      );
    }
  };

  handleFavourites = (movieObj) => {
    let oldData = JSON.parse(localStorage.getItem("movies-app") || "[]");
    if (this.state.favourites.includes(movieObj.id)) {
      oldData = oldData.filter((movie) => movie.id != movieObj.id);
    } else {
      oldData.push(movieObj);
    }
    localStorage.setItem("movies-app", JSON.stringify(oldData));
    this.handleFavouritesState();
  };

  handleFavouritesState = () => {
    let oldData = JSON.parse(localStorage.getItem("movies-app") || []);
    let temp = oldData.map((movie) => movie.id);

    this.setState({
      favourites: [...temp],
    });
  };

  render() {
    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>
        <div className="movies-list">
          {this.state.movies.map((movie) => (
            <div
              className="card movie-card"
              onMouseEnter={() => this.setState({ hover: movie.id })}
              onMouseLeave={() => this.setState({ hover: "" })}
            >
              <img
                className="card-img-top movie-img"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="..."
                style={{ width: "20vw", height: "40vh" }}
              />
              <h5 className="card-title movie-title">{movie.title}</h5>
              <div className="btn-wrapper">
                {this.state.hover === movie.id && (
                  <a
                    onClick={() => this.handleFavourites(movie)}
                    className="btn btn-primary movies-btn text-center"
                  >
                    {this.state.favourites.includes(movie.id)
                      ? "Remove from favourites"
                      : "Add to favourites"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" onClick={this.handlePrevious}>
                  Previous
                </a>
              </li>
              {this.state.parr.map((value) => (
                <li class="page-item">
                  <a
                    class="page-link"
                    onClick={() => this.handlePageClick(value)}
                  >
                    {value}
                  </a>
                </li>
              ))}
              <li class="page-item">
                <a class="page-link" href="#" onClick={this.handleNext}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default MovieList;
