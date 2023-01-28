import { produce } from "immer";
import * as actionsTypes from "./constants/userContants";

const initialState = {
  users: [],
  selectedUser: null,
  isLoading: false,
  error: null,
  searchTerm: "",
};

const reducer = (state = initialState, { type, payload }) => {
  const newState = produce(state, (draft) => {
    if (type === actionsTypes.UPDATE_USER_LIST_PENDING) {
      draft.isLoading = true;
    }

    if (type === actionsTypes.UPDATE_USER_LIST_FULFILLED) {
      draft.users = payload;
      draft.isLoading = false;
    }

    if (type === actionsTypes.UPDATE_USER_LIST_REJECTED) {
      draft.error = payload;
      draft.isLoading = false;
    }

    if (type === actionsTypes.UPDATE_SELECTED_USER) {
      draft.selectedUser = payload;
    }

    if (type === actionsTypes.UPDATE_SEARCH_TERM) {
      draft.searchTerm = payload;
    }
  });

  return newState;
};

export default reducer;
