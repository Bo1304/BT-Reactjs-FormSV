import React, { Component } from "react";

class Databinding extends Component {
  fullName = "Hiếu Đặng";
  age = 18;

  showInfo() {
    const email = "hieu@gmail.com";
    return this.fullName + this.age + email;
  }
  // function thường
  showMessage() {
    alert("hello");
  }
  // function có tham số
  showMessage2(message) {
    alert(message);
  }
  // function có this
  showMessage3 = () => {
    console.log(this);
    alert(this.fullName);
  };

  render() {
    return (
      <div>
        <button onClick={this.showMessage3}>Show Message 3</button>

        <button
          onClick={() => {
            this.showMessage2("helloooooooo");
          }}
        >
          Show Message 2
        </button>

        <button onClick={this.showMessage}>Show Message</button>
        <h1>Tên: {this.fullName} </h1>
        <h2>Tuổi: {this.age}</h2>
        <h3> {this.showInfo()} </h3>
      </div>
    );
  }
}

export default Databinding;
