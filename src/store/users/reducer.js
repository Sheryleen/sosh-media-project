import * as types from "../constants";

const initialState = {
  all: [],
  loggedInUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_USERS_PENDING:
      return state;

    case types.FETCH_ALL_USERS_FAILED:
      return {
        ...state,
        err: action.payload
      };

    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload
      };

    default:
      return state;
  }
};
