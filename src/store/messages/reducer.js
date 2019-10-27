import * as types from "./constants";


const initialState = {
    all: [],
    err: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_MESSAGES_PENDING:
        case types.ADD_MESSAGE_PENDING:
        case types.REMOVE_MESSAGE_PENDING:
            return state;

        case types.FETCH_ALL_MESSAGES_FAILED:
        case types.ADD_MESSAGE_FAILED:
        case types.REMOVE_MESSAGE_FAILED:
            return {
                ...state,
                err: action.payload
            };
        case types.FETCH_ALL_MESSAGES_SUCCESS:
            return {
                ...state,
                all: action.payload
            };

        case types.ADD_MESSAGE_SUCCESS:
            return {
                ...state,
                all: [...state.all,action.payload]
            };
        case types.REMOVE_MESSAGE_SUCCESS:
            return {
                ...state,
                all: state.all.filter(message => message.id === action.payload.id)
            };
        default:
            return state;
    }
};