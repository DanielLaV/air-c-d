import { csrfFetch } from "./csrf";

export const LOAD_PETS = "LOAD_PETS";

/* ------ ACTIONS ------ */

export const loadPets = pets => {
    return {
        type: LOAD_PETS,
        payload: pets,
    }
};

/* ----- SELECTORS / THUNKS ----- */

export const getDogs = () => async (dispatch) => {
    const res = await csrfFetch('/api/pets', {
        method: 'GET',
    });
    console.log('RES IN THE THUNK IS', res);
    const data = await res.json();
    console.log('DATA is an android', data);
    console.log('DATA type', typeof data);
    console.log('DATA is array', Array.isArray(data));
    dispatch(loadPets(data));
    return res;
}

export const getCats = () => async (dispatch) => {
    const res = await csrfFetch('/api/pets/cats', {
        method: 'GET',
    });
    const data = await res.json();
    dispatch(loadPets(data));
    return res;
}

export const getOthers = () => async (dispatch) => {
    const res = await csrfFetch('/api/pets/others', {
        method: 'GET',
    });
    const data = await res.json();
    dispatch(loadPets(data));
    return res;
}

/* ----- REDUCER ------ */

const initialState = { };

const petsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PETS: {
            let newState = Object.assign({}, state);
            console.log('NewState 1', newState)
            newState.pets = action.payload;
            console.log('NewState 2', newState)

            return newState;
        }
        default: {
            return state;
        }
    }
};

export default petsReducer;
