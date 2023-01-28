import React, { Component } from "react";
import Parent from "./Parent";
import Uncle from "./Uncle";

class GrandPa extends Component {
  email = "hieudang@gmail.com";
  age = 20;
  // biến hứng dữ liệu từ con truyền ra
  state = { avatar: "" };
  // hàm set biến hứng, tham số đầu vào dữ liệu từ con truyền ra
  setAvatar = (dataFromChild) => {
    console.log("dataFromChild", dataFromChild);
    this.setState({
      avatar: dataFromChild,
    });
  };

  render() {
    return (
      <div className="bg-success p-3">
        <h1>GrandPa</h1>
        <div className="d-flex">
          <Parent
            setAvatar={this.setAvatar}
            email={this.email}
            age={this.age}
          />
          <Uncle avatar={this.state.avatar}>
            <h1>Hellooo</h1>
            <span>ahsdkjahsd</span>
          </Uncle>
        </div>
      </div>
    );
  }
}

export default GrandPa;
