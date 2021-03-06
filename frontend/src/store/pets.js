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
    const data = await res.json();
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
            newState.pets = action.payload;

            return newState;
        }
        default: {
            return state;
        }
    }
};

export default petsReducer;
