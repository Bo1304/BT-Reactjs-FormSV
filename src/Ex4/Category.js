import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from "clsx";

class Category extends Component {
  handleChange = (type) => {
    this.props.dispatch({
      type: "category/UPDATE_SELECTED_CATEGORY",
      payload: type,
    });
  };

  render() {
    return (
      <div className="btn-group d-flex justify-content-center">
        {this.props.categories.map((item) => {
          return (
            <button
              onClick={() => this.handleChange(item.type)}
              key={item.type}
              className={clsx("btn", "btn-secondary", {
                "btn-danger": item.type === this.props.selectedCategory,
              })}
            >
              {item.showName}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories,
    selectedCategory: state.category.selectedCategory,
  };
};

export default connect(mapStateToProps)(Category);
