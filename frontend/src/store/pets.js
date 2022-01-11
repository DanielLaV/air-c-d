import { csrfFetch } from "./csrf";

export const LOAD_DOGS = "LOAD_DOGS";
export const LOAD_CATS = "LOAD_CATS";
export const LOAD_OTHERS = "LOAD_OTHERS";

/* ------ ACTIONS ------ */

export const loadDogs = dogs => {
    return {
        type: LOAD_DOGS,
        payload: dogs,
    }
};

export const loadCats = cats => {
    return {
        type: LOAD_CATS,
        payload: cats,
    }
};

export const loadOthers = others => {
    return {
        type: LOAD_OTHERS,
        payload: others,
    }
};

/* ----- SELECTORS / THUNKS ----- */

export const getDogs = () => async (dispatch) => {
    const res = await csrfFetch('/api/pets', {
        method: 'GET',
    });
    const data = await res.json();
    dispatch(loadDogs(data));
    return res;
}

export const getCats = () => async (dispatch) => {
    const res = await csrfFetch('/api/pets/cats', {
        method: 'GET',
    });
    const data = await res.json();
    dispatch(loadCats(data));
    return res;
}

export const getOthers = () => async (dispatch) => {
    const res = await csrfFetch('/api/pets/others', {
        method: 'GET',
    });
    const data = await res.json();
    dispatch(loadOthers(data));
    return res;
}

/* ----- REDUCER ------ */

const initialState = { pets: null };

const petsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DOGS: {
            const newState = Objects.assign({}, state);
            newState.pets = action.payload;
            return newState;
        }
        case LOAD_CATS: {
            const newState = Objects.assign({}, state);
            newState.pets = action.payload;
            return newState;
        }
        case LOAD_OTHERS: {
            const newState = Objects.assign({}, state);
            newState.pets = action.payload;
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default petsReducer;
