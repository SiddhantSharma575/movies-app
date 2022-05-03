import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div style={{ display: "flex", padding: "0.5rem" }}>
        <h1>Movies App</h1>
        <h2 style={{ marginLeft: "2rem", marginTop: "1.8rem" }}>Favouites</h2>
      </div>
    );
  }
}

export default Navbar;
