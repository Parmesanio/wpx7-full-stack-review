const initialState = {
    user: {
        auth0_id: 'ad9f8g7a8',
        name:'T$',
        email: 'hahaha@gmail.com',
        picture: 'handsome'
    },
    memesList: []
}

// action type: the name of what happened. something happened in the system. system sent a message to store reducer. 
const SET_MEMES_LIST = "SET_MEMES_LIST";
const LOGGED_IN = "LOGGED_IN";
const LOGGED_OUT = "LOGGED_OUT";

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case LOGGED_IN:
            return {...state, user: action.payload};
        case LOGGED_OUT:
            return {...state, user: null}
        case SET_MEMES_LIST: 
            return {...state, memesList: action.payload}
        default: 
            return state;
    }
}

export function logIn(user) {
    return {
        type: LOGGED_IN,
        payload: user
    } 
}

export function logOut() {
    return {
        type: LOGGED_OUT
    } 
}
export function setMemes(memesList) {
    return {
        type: SET_MEMES_LIST,
        payload: memesList
    }
}