import PropTypes from "prop-types";
import React, { Component } from "react";

export class Favourites extends Component {
  constructor() {
    super();

    this.state = {
      genres: [],
      currgenre: "All genres",
    };
  }

  render() {
    return <div>Favourites</div>;
  }
}

export default Favourites;
