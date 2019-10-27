import * as types from "../constants";
import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchAllUsers = () => async dispatch => {
  dispatch({
    type: types.FETCH_ALL_USERS_PENDING
  });
  try {
    let response = await axios.get("http://localhost:8082/api/users");
    dispatch({
      type: types.FETCH_ALL_USERS_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: types.FETCH_ALL_USERS_FAILED,
      payload: err
    });
  }
};

// export const fetchOneUser = id => async dispatch => {
//   dispatch({
//     type: types.FETCH_ONE_USER_PENDING
//   });
//   try {
//     let response = await axios.get(BASE_URL + `/$id`);
//     dispatch({
//       type: types.FETCH_ONE_USER_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: types.FETCH_ONE_USERS_FAILED,
//       payload: err
//     });
//   }
// };

// export const addUser = newUser => async dispatch => {
//   dispatch({
//     type: types.ADD_USER
//   });
//   try {
//     let response = await axios.post(BASE_URL, newUser);
//     dispatch({
//       type: types.ADD_USER_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: types.ADD_USER_FAILED,
//       payload: err
//     });
//   }
// };

// export const removeUser = id => async dispatch => {
//   dispatch({
//     type: types.REMOVE_USER_PENDING
//   });
//   try {
//     let response = await axios.delete(BASE_URL + `/${id}`);
//     dispatch({
//       type: types.REMOVE_USER_SUCCESS,
//       payload: response.data
//     });
//   } catch (err) {
//     dispatch({
//       type: types.REMOVE_USER_FAILED,
//       payload: err
//     });
//   }
// };

export const userLogin = (creds, history) => dispatch => {
  dispatch({
    type: types.USER_LOGIN_PENDING
  });
 console.log('creds', creds)
 
  axios
    .post("http://localhost:8082/api/users/login/", creds)
    .then(res => {
      dispatch({
        type: types.USER_LOGIN_SUCCESS,
        payload: res.data
      });
      history.push("/homepage");
      localStorage.setItem('loggedInUser', JSON.stringify(res.data))
      window.location.reload()
    })
    .catch(err => {
      dispatch({
        type: types.USER_LOGIN_FAILED,
        payload: err
      });
    });
};
