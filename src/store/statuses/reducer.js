import * as types from "../constants";


const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_STATUSES_PENDING:
    case types.ADD_STATUS_PENDING:
    case types.REMOVE_STATUS_PENDING:
      return state;

    case types.FETCH_ALL_STATUSES_FAILED:
    case types.ADD_STATUS_FAILED:
    case types.REMOVE_STATUS_FAILED:
      return {
        ...state,
        err: action.payload
      };
    case types.FETCH_ALL_STATUSES_SUCCESS:
      return {
        ...state,
        all: action.payload
      };

    case types.ADD_STATUS_SUCCESS:
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    case types.REMOVE_STATUS_SUCCESS:
      return {
        ...state,
        all: state.all.filter(status => status.id === action.payload.id)
      };
    default:
      return state;
  }
};
