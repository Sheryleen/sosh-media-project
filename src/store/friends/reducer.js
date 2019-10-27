import * as types from "./constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case types.FETCH_ALL_FRIENDS_PENDING:
    // case types.FETCH_ADD_FRIENDS_FAILED:
    // case types.FETCH_REMOVE_FRIENDS_FAILED:
    //   return {
    //     ...state,
    //     err: action.payload
    //   };
    
    // case types.FETCH_ALL_FRIENDS_FAILED:
    // case types.ADD_ALL_FRIENDS_FAILED:
    // case types.REMOVE_FRIEND_FAILED:
    //   return {
    //     ...state,
    //     err: action.payload,
    //   }
    
    
    case types.FETCH_ALL_FRIENDS_SUCCESS:
      return {
        ...state,
        all: action.payload
      }
    
    default:
      return state;
  }
}
  
