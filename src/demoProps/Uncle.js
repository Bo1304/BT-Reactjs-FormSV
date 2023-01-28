import React, { Component } from "react";

class Uncle extends Component {
  render() {
    return (
      <div className="bg-info p-3">
        <h1>Uncle</h1>
        <h1>Avatar: {this.props.avatar}</h1>
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}

export default Uncle;
