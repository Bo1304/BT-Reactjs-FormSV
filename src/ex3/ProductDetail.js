import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    const { image, name, price, description, quantity } =
      this.props.selectedProduct;
    return (
      <div className="card p-4 mt-5">
        <div className="row">
          <div className="col-5">
            <img src={image} alt="" />
          </div>
          <div className="col-7">
            <h2>Tên: {name} </h2>
            <h4>Giá: {price} </h4>
            <h4>Mô tả: {description} </h4>
            <h4>Số lượng: {quantity} </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
