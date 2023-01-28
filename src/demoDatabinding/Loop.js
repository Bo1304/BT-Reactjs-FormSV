import React, { Component } from "react";

class Loop extends Component {
  products = [
    { id: 1, name: "Iphone 14", price: 1000 },
    { id: 2, name: "Samsung ZFlip 4", price: 800 },
    { id: 3, name: "Xiaomi Red 8", price: 700 },
  ];

  renderProducts() {
    // [{}, {}, {}] => [<tr>, <tr> ,<tr>]
    const htmlArr = this.products.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    });

    // for (let item of this.products) {
    //   var trTag = (
    //   <tr>
    //     <td>{item.id}</td>
    //     <td>{item.name}</td>
    //     <td>{item.price}</td>
    //   </tr>
    //   );
    //   htmlArr.push(trTag);
    // }
    // console.log(htmlArr);
    return htmlArr;
  }

  render() {
    return (
      <div>
        <h1>Danh sách sản phẩm</h1>
        <img  src="./glassesImage/background.jpg" />
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Tên SP</th>
              <th>Giá SP</th>
            </tr>
          </thead>

          <tbody>{this.renderProducts()}</tbody>
        </table>
      </div>
    );
  }
}

export default Loop;
