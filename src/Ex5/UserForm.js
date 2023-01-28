import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actionCreateUser,
  actionUpdateUser,
} from "../redux/actions/userActions";

class UserForm extends Component {
  state = {
    // Quản lý giá trị của input
    values: {
      username: "",
      fullName: "",
      password: "",
      email: "",
      phone: "",
      type: "",
    },
    // Quản lý lỗi của input
    errors: {
      username: "",
      fullName: "",
      password: "",
      email: "",
      phone: "",
      type: "",
    },
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  handleBlur = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      errors: {
        ...this.state.errors,
        [name]: this.validation(name, value),
      },
    });
  };

  handleSubmit = async (evt) => {
    // Ngăn chặn hành vi reload khi submit form
    evt.preventDefault();

    // Kiểm tra validation trước khi call API thêm user
    const { values } = this.state;
    const validationErrors = {};
    for (let key in values) {
      const error = this.validation(key, values[key]);
      if (error) {
        validationErrors[key] = error;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      this.setState({
        errors: {
          ...this.state.errors,
          ...validationErrors,
        },
      });

      return;
    }

    const { id, ...payload } = values;
    try {
      if (id) {
        this.props.dispatch(actionUpdateUser(id, payload));
      } else {
        this.props.dispatch(actionCreateUser(payload));
      }

      // Xoá giá trị của các input
      this.setState({
        values: {
          username: "",
          fullName: "",
          password: "",
          email: "",
          phone: "",
          type: "",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm xử lý validation
  validation = (name, value) => {
    switch (name) {
      case "username": {
        if (!value.trim()) {
          return "Tài khoản không được để trống";
        }
        return "";
      }
      case "fullName": {
        if (!value.trim()) {
          return "Họ tên không được để trống";
        }
        return "";
      }
      case "email": {
        if (!value.trim()) {
          return "Email không được để trống";
        }
        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
          return "Email không đúng định dạng";
        }
        return "";
      }
      case "phone":{
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
       
        if(value !==''){
            if (vnf_regex.test(value) == false) 
            {
                return('Số điện thoại phải 09 || 07 || 08 ||03 || 05 ở đầu và phải 10 số!');
            }
           
        }
        else{
          return('Số điện thoại không được để trống!');
        }
        return "" ;
      }
      case "password":{
        if(!value.trim()){
          return "Password không được để trống";
        }
        if(!/^[A-Za-z]\w{7,14}$/.test(value)){
          return "password không đúng dịnh dạng, vui lòng nhập lại";
        }
      }
      default:
        return "";
    }
  };

  render() {
    const { values, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header bg-dark">
          <h4 className="text-white">Form đăng ký</h4>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="username"
                value={values.username}
                placeholder="Tai Khoan"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {errors.username && (
                <div className="alert alert-danger">{errors.username}</div>
              )}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="fullName"
                value={values.fullName}
                placeholder="Họ tên"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {errors.fullName && (
                <div className="alert alert-danger">{errors.fullName}</div>
              )}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                name="password"
                value={values.password}
                placeholder="Mật khẩu"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {errors.password && (
                <div className="alert alert-danger">{errors.password}</div>
              )}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="phone"
                value={values.phone}
                placeholder="Số ĐT"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {errors.phone && (
                <div className="alert alert-danger">{errors.phone}</div>
              )}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {errors.email && (
                <div className="alert alert-danger">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <input
                className="form-control"
                type="text"
                name="type"
                value={values.type}
                placeholder="Mã loại người dùng"
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              {errors.type && (
                <div className="alert alert-danger">{errors.type}</div>
              )}
            </div>

            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    );
  }

  // Khi props hoặc state thay đổi, component sẽ re-render và chạy vào lifecycle componentDidUpdate
  componentDidUpdate(prevProps) {
    // Kiểm tra nếu prop user bị thay đổi, dùng giá trị của prop đó để set lại cho state values
    if (this.props.user && this.props.user !== prevProps.user) {
      this.setState({
        values: this.props.user,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.selectedUser,
  };
};

export default connect(mapStateToProps)(UserForm);
