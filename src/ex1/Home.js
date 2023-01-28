import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-flex">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
