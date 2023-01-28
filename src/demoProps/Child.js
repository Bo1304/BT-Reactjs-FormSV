import React, { Component } from "react";

class Child extends Component {
  //   avatar = "abc.png";
  render() {
    return (
      <div className="bg-danger p-3 mb-4">
        <h1>Child</h1>
        <h3>Name: {this.props.item.name}</h3>
        <h3>Avatar: {this.props.item.avatar}</h3>
        <button
          onClick={() => {
            this.props.setAvatar(this.props.item.avatar);
          }}
        >
          Emit Avatar
        </button>
        {/* <h2>Email: {this.props.email}</h2>
        <h2>FullName: {this.props.name}</h2>
        <button
          onClick={() => {
            this.props.setAvatar(this.avatar);
          }}
        >
          Emit Avatar
        </button> */}
      </div>
    );
  }
}

export default Child;
