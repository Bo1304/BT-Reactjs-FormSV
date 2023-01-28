import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  handleTryCloth = () => {
    const { type, imgSrc_png } = this.props.prod;

    this.props.dispatch({
      type: "product/UPDATE_SELECTED_PRODUCT",
      payload: {
        type: type,
        img: imgSrc_png,
      },
    });
  };
  render() {
    const { imgSrc_jpg, name } = this.props.prod;
    return (
      <div className="card p-2 mb-4">
        <img alt="" src={imgSrc_jpg} />
        <h3>{name}</h3>
        <button onClick={this.handleTryCloth} className="btn btn-info">
          Mặc thử
        </button>
      </div>
    );
  }
}

export default connect()(ProductItem);
