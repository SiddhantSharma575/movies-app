import React, { Component } from "react";
import { movies } from "../movieData";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export class Bannner extends Component {
  constructor() {
    super();
    this.state = {
      currIdx: 0,
    };
  }
  handlePrev = () => {
    if (this.state.currIdx === 0) {
      this.setState({
        currIdx: movies.results.length - 1,
      });
    } else {
      this.setState({
        currIdx: this.state.currIdx - 1,
      });
    }
  };
  handleNext = () => {
    if (this.state.currIdx === movies.results.length - 1) {
      this.setState({
        currIdx: 0,
      });
    } else {
      let prev = this.state.currIdx + 1;
      this.setState({
        currIdx: prev,
      });
    }
  };
  render() {
    return (
      <div className="card banner-card">
        <img
          className="card-img-top banner-img"
          src={`https://image.tmdb.org/t/p/original${
            movies.results[this.state.currIdx].backdrop_path
          }`}
          alt="..."
        />
        <button
          type="button"
          class="btn btn-primary text-center prev-icon"
          onClick={this.handlePrev}
        >
          <GrPrevious />
        </button>
        <button
          type="button"
          class="btn btn-primary text-center next-icon"
          onClick={this.handleNext}
        >
          <GrNext />
        </button>
        <h5 className="card-title banner-title">
          {movies.results[this.state.currIdx].title}
        </h5>
        <p className="card-text bannner-text">
          {movies.results[this.state.currIdx].overview}
        </p>
      </div>
    );
  }
}

export default Bannner;
