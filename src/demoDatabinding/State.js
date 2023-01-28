import React, { Component } from "react";

class State extends Component {
  state = {
    isLogin: false,
    a: 1,
    b: 2,
  };

  renderNav() {
    if (this.state.isLogin) {
      return (
        <div>
          <h4>Xin chào, Hiếu</h4>
          <button>Log out</button>
        </div>
      );
    }

    return (
      <div>
        <button>Đăng Ký</button>
        <button>Đăng Nhập</button>
      </div>
    );
  }

  login = () => {
    this.setState({
      isLogin: true,
    });
  };
  logout = () => {
    this.setState({
      isLogin: false,
    });
  };

  render() {
    return (
      <div>
        <h1>Demo State</h1>
        {/* {this.renderNav()} */}
        {this.state.isLogin ? (
          <div>
            <h4>Xin chào, Hiếu</h4>
            <button onClick={this.logout}>Log out</button>
          </div>
        ) : (
          <div>
            <button>Đăng Ký</button>
            <button onClick={this.login}>Đăng Nhập</button>
          </div>
        )}
      </div>
    );
  }
}

export default State;
