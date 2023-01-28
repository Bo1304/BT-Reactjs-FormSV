// Định nghĩa các actions của redux
import axios from "axios";
import * as actionsTypes from "../constants/userContants";

// action creators
// export const actionUpdateUserList = (users) => {
//   return {
//     type: actionsTypes.UPDATE_USER_LIST,
//     payload: users,
//   };
// };

// export const actionUpdateSelectedUser = (user) => {
//   return {
//     type: actionsTypes.UPDATE_SELECTED_USER,
//     payload: user,
//   };
// };

// ======================================================================
// Mặc định redux chỉ cho phép action là một plain object
// Để có thể tạo được các async actions, ta sử dụng một khái niệm của redux gọi là middleware
// redux midleware: redux-thunk, redux-saga, redux-observable
// redux thunk: cho phép các action creators return về một function thay vì một action (plain object)
export const actionFetchUsers = () => {
  // thunk action: nhận vào 2 tham số là dispatch và getState
  // dispatch: hàm dùng để đưa các action vào store
  // getState: hàm dùng để lấy state từ store
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionsTypes.UPDATE_USER_LIST_PENDING,
      });

      const { searchTerm } = getState().user;
      const res = await axios({
        method: "GET",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users",
        params: {
          username: searchTerm || undefined,
        },
      });

      dispatch({
        type: actionsTypes.UPDATE_USER_LIST_FULFILLED,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      // error.response.data: format của axios
      dispatch({
        type: actionsTypes.UPDATE_USER_LIST_REJECTED,
        payload: error.response.data || error.message,
      });
    }
  };
};

export const actionDeleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users/${userId}`,
      });

      dispatch(actionFetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionSelectUser = (userId) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users/${userId}`,
      });

      dispatch({
        type: actionsTypes.UPDATE_SELECTED_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionCreateUser = (user) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "POST",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users",
        data: user,
      });

      dispatch(actionFetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionUpdateUser = (id, user) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "PUT",
        url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users/${id}`,
        data: user,
      });

      dispatch(actionFetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const actionUpdateSearchTerm = (searchTerm) => {
  return (dispatch) => {
    dispatch({
      type: actionsTypes.UPDATE_SEARCH_TERM,
      payload: searchTerm,
    });

    dispatch(actionFetchUsers());
  };
};
