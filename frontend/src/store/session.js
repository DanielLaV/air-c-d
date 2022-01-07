/* Actions, Selectors and Reducer for authenticating a session user  */
import { csrfFetch } from './csrf';


export const LOAD_USER = 'LOAD_USER';
export const REMOVE_USER = 'REMOVE_USER';


/* ------- ACTIONS ------- */

export const loadUser = (user) => {
    // const { id, email, username, createdAt, updatedAt } = user;
    return {
        type: LOAD_USER,
        payload: user
    }
};

export const removeUser = () => ({
    type: REMOVE_USER,
});


/* ------ SELECTORS / THUNKS ----- */

export const loginUser = (user) => async (dispatch) => {
    const { credential, password } = user;
    const res = await csrfFetch(`/api/session`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            credential,
            password
        })
    });
    const data = await res.json();
    dispatch(loadUser(data.user));
    return res;
};

export const signupUser = user => async dispatch => {
    const { username, email, password } = user;
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            email,
            password
        }),
    });
    const data = await res.json();
    dispatch(loadUser(data.user));
    return res;
};

export const restoreUser = () => async dispatch => {
    const res = await csrfFetch('/api/session');
    const data = await res.json();
    dispatch(loadUser(data.user));
    return res;
};

export const logoutUser = () => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'DELETE'
    });
    dispatch(removeUser());
    return res;
};

/* ------ REDUCER ------ */

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    // const { id, email, username, createdAt, updatedAt } = action.user;

    switch (action.type) {
        case LOAD_USER: {
            const newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        }
        case REMOVE_USER: {
            const newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default sessionReducer;
