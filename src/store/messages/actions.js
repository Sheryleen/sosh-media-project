import * as types from './constants'
import axios from 'axios'
import { BASE_URL } from './constants'

export const fetchAllMessages = user_id => async dispatch => {
    dispatch({
        type: types.FETCH_ALL_MESSAGES_PENDING,
    })
    try {
        let response = await axios.get(
            `http://localhost:8082/api/sosh/users/${user_id}/messages`
        )
        dispatch({
            type: types.FETCH_ALL_MESSAGES_SUCCESS,
            payload: response.data,
        })
    } catch (err) {
        dispatch({
            type: types.FETCH_ALL_MESSAGES_FAILED,
            payload: err,
        })
    }
}
export const fetchOneMessage = id => async dispatch => {
    dispatch({
        type: types.FETCH_ONE_MESSAGE_PENDING,
    })
    try {
        let response = await axios.get(BASE_URL + `/${id}`)
        dispatch({
            type: types.FETCH_ONE_MESSAGE_SUCCESS,
            payload: response.data
        })
    }
 
  catch (err) {
    dispatch({
        type: types.FETCH_ONE_MESSAGE_FAILED,
        payload: err,
    })
 }
}
// export const addMessage = newMessage => async dispatch => {
//     dispatch({
//         type: types.FETCH_ADD_MESSAGE_PENDING,
//     })
//     try {
//         let response = await axios.get(BASE_URL + `/${id}`)
//         dispatch({
//             type: types.FETCH_ADD_MESSAGE_SUCCESS,
//             payload: err,
//         })
//     }
//     catch (err) {
//         dispatch({
//             type: types.FETCH_ADD_MESSAGE_FAILED,
//             payload: err,
//         })
//     }
// }

export const addMessage = (newMessage, id) => async dispatch => {
    dispatch({
        type: types.ADD_MESSAGE_PENDING,
    })
    try {
        let response = await axios.post("http://localhost:8082/api/sosh/messages", newMessage) //post new message to new message
        dispatch({
            type: types.ADD_MESSAGE_SUCCESS,
            payload: response.data,
        })
    }
    catch (err) {
        dispatch({
            type: types.ADD_MESSAGE_FAILED,
            payload: err,
        })
    }
}