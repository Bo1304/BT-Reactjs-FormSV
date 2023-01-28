import { Component } from "react";
//import css
import "./Header.css";
// class component
class Header extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Header</h1>
        <span>This is a header</span>
        <br />
        <span>Header Header Header!!!</span>
      </div>
    );
  }
}

export default Header;
