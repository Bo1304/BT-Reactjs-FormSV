import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  // this.props.products
  renderProducts = () => {
    return this.props.products.map((item) => {
      return (
        <div key={item.id} className="col-3">
          <ProductItem
            addToCart={this.props.addToCart}
            setSelectedProduct={this.props.setSelectedProduct}
            item={item}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row mt-5">{this.renderProducts()}</div>;
  }
}

export default ProductList;
