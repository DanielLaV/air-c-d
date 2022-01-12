import { csrfFetch } from "./csrf";

export const LOAD_OWNED_PETS = "LOAD_OWNED_PETS";
export const ADD_OWNED_PET = "ADD_OWNED_PET";


/* ----- ACTIONS ------ */

export const loadOwnedPets = ownedPets => {
    return {
        type: LOAD_OWNED_PETS,
        payload: ownedPets,
    }
};

export const addOwnedPet = ({userId, newPet}) => {
    return {
        type: ADD_OWNED_PET,
        payload: { newPet, userId }
    }
}

/* ------ THUNK ------ */

export const getOwnedPets = userId => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: 'GET',
    });
    const data = await res.json();
    dispatch(loadOwnedPets(data));
    return res;
}

export const addNewPet = ({userId, newPet}) => async (dispatch) => {
    const { userId } = userId;
    const { name, type, forKids, url } = newPet;
    const res = await csrfFetch(`/api/pets`, {
        method: 'POST',
        body: JSON.stringify({
            userId,
            name,
            type,
            forKids,
            url
        })
    })
    const data = await res.json();
    dispatch(getOwnedPets(data));
    return res;
}

/* ----- REDUCER ------ */
const initialState = {};

const ownedPetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OWNED_PETS: {
            let newState = Object.assign({}, state);
            newState = action.payload;
            return newState;
        }
        case ADD_OWNED_PET: {
            let newState = Object.assign({}, state.ownedPets);
            newState = {...newState, ...action.payload.newPet};
            return newState;
        }
        default: return state;
    }
};

export default ownedPetsReducer;
