import * as types from "./constants";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchAllFriends = () => async dispatch => {
  dispatch({
    type: types.FETCH_ADD_FRIENDS_PENDING
  });
  // try {
  let response = await axios.get(BASE_URL);
  console.log("RES: ", response);

  dispatch({
    type: types.FETCH_ALL_FRIENDS_SUCCESS,
    payload: response.data
  });
  // }
};

// export const addFriend = newFriend => async dispatch => {
//     dispatch({
//         type: types.FETCH_ADD_FRIENDS_PENDING,
//     })
//     try {
//         let response = await axios.post
//     }
// }
