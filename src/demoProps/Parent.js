import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  // props: chứa các dữ liệu đc truyền vào,
  //        readonly, không đc phép chỉnh sửa props
  fullName = "hieu";
  children = [
    {
      id: 1,
      name: "Hieu",
      avatar: "hieu.png",
    },
    {
      id: 2,
      name: "Dung",
      avatar: "dung.png",
    },
    {
      id: 3,
      name: "Tai",
      avatar: "tai.png",
    },
  ];

  renderChildren = () => {
    return this.children.map((item) => {
      return (
        <Child 
            setAvatar={this.props.setAvatar} 
            key={item.id} 
            item={item} 
        />
      );
    });
    // => [<Child item={"hieu"} />, <Child item={dung} />, <Child item={'tai'} />  ]
  };

  render() {
    return (
      <div className="bg-primary p-3 me-5">
        <h1>Parent</h1>
        <h2>Email: {this.props.email}</h2>
        <h2>Age: {this.props.age}</h2>
        {this.renderChildren()}
      </div>
    );
  }
}

export default Parent;
