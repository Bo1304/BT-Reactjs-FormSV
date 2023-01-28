import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    return (
      <div className="row mt-3">
        {this.props.products
          .filter((item) => item.type === this.props.selectedCategory)
          .map((item) => (
            <div key={item.id} className="col-4">
              <ProductItem prod={item} />
            </div>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
  selectedCategory: state.category.selectedCategory,
});

export default connect(mapStateToProps)(ProductList);
