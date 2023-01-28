import React, { Component } from "react";
import { connect } from "react-redux";
import { actionUpdateSearchTerm } from "../redux/actions/userActions";

class SearchUser extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (evt) => {
    this.setState({
      searchTerm: evt.target.value,
    });
  };

  handleSearch = () => {
    // this.props.dispatch(actionFetchUsers(this.state.searchTerm));
    this.props.dispatch(actionUpdateSearchTerm(this.state.searchTerm));
  };

  render() {
    return (
      <div className="mt-3 mb-2 d-flex">
        <input
          className="form-control"
          placeholder="Tìm kiếm theo tài khoản"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary w-25" onClick={this.handleSearch}>
          Tìm kiếm
        </button>
      </div>
    );
  }
}

export default connect()(SearchUser);
