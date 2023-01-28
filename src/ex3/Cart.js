import React, { Component } from "react";

class Cart extends Component {
  countTotalAmount = () => {
    // return tổng tiển
    const total = this.props.cart.reduce((prevValue, currentItem) => {
      return prevValue + currentItem.quantity * currentItem.product.price;
    }, 0);

    return total;
  };

  renderCart = () => {
    return this.props.cart.map((item, index) => {
      const { image, name, price } = item.product;
      const { quantity } = item;
      return (
        <tr>
          <td>{index}</td>
          <td>
            <img
              style={{
                width: 80,
              }}
              src={image}
              alt=""
            />
          </td>
          <td>{name}</td>
          <td>
            <button className="btn btn-info">-</button>
            <span>{quantity}</span>
            <button className="btn btn-info">+</button>
          </td>
          <td>{price}$</td>
          <td>{price * quantity}$</td>
          <td>
            <button className="btn btn-danger">Xoá</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Giỏ hàng
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Hình ảnh</th>
                    <th>Tên SP</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
              </table>
              <h2>Tổng tiền: {this.countTotalAmount()}</h2>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" className="btn btn-primary">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
