import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { image, name, price } = this.props.item;
    return (
      <div className="card p-3">
        <img src={image} alt="" />
        <h4>{name}</h4>
        <h5>Giá: {price}$ </h5>
        <div className="d-flex">
          <button
            onClick={() => {
              this.props.setSelectedProduct(this.props.item);
            }}
            className="btn btn-success me-2"
          >
            Chi tiết
          </button>
          <button
            onClick={() => {
              this.props.addToCart(this.props.item);
            }}
            className="btn btn-info"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
