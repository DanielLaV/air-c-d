/* Actions, Selectors and Reducer for authenticating a session user  */
import { csrfFetch } from './csrf';


export const LOAD_USER = 'LOAD_USER';
export const REMOVE_USER = 'REMOVE_USER';


/* ------- ACTIONS ------- */

export const loadUser = (user) => {
    const { id, email, username, createdAt, updatedAt } = user;
    return {
        type: LOAD_USER,
        user: {
            id,
            email,
            username,
            createdAt,
            updatedAt
        }
    }
};

export const removeUser = (user) => ({
    type: REMOVE_USER,
    user: null
});

/* ------ SELECTORS / THUNKS ----- */

export const loginUser = (user) => async (dispatch) => {
    const { id, password } = user;
    const res = await csrfFetch(`/api/session`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            credential: id,
            password
        })
    });
    const data = res.json();
    console.log('DATA', data)
    dispatch(loadUser(data));
}

/* ------ REDUCER ------ */

export default function sessionReducer(state = {}, action) {
    // const { id, email, username, createdAt, updatedAt } = action.user;

    switch (action.type) {
        case LOAD_USER: {
            const newState = Object.assign({}, state);
            newState.user = {
                ...action.user,
                // id,
                // email,
                // username,
                // createdAt,
                // updatedAt
            };
            return newState;
        }
        default: {
            const newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        }
    }
}
