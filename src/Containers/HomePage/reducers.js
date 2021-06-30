import {ActionTypes} from "./constants";

const defaultSate = {
    users: []
}

export default function homePageReducer(state = defaultSate, action) {
    switch (action.type) {
        case ActionTypes.SET_USERS:
            return {...state, users: action.payload}
        default:
            return state
    }
}

