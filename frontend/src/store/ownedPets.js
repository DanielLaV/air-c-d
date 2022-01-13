import { useSelector } from "react-redux";
import { csrfFetch } from "./csrf";

export const LOAD_OWNED_PETS = "LOAD_OWNED_PETS";
export const ADD_OWNED_PET = "ADD_OWNED_PET";
export const EDIT_OWNED_PET = "EDIT_OWNED_PET";




/* ----- ACTIONS ------ */

export const loadOwnedPets = ownedPets => {
    return {
        type: LOAD_OWNED_PETS,
        payload: ownedPets,
    }
};

export const addOwnedPet = (newPet) => {
    return {
        type: ADD_OWNED_PET,
        payload: newPet
    }
}

export const editOwnedPet = (editedPet) => {
    return {
        type: EDIT_OWNED_PET,
        payload: editedPet
    }
}

/* ------ THUNK ------ */

export const getOwnedPets = userId => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`, {
        method: 'GET',
    });
    const data = await res.json();
    // console.log('DATA IS AN ANDROID', data)
    dispatch(loadOwnedPets(data));
    return res;
}

export const addNewPet = (newPet) => async (dispatch) => {
console.log(newPet, 'NEW PET');
    // const { name, type, forKids, url } = newPet;
    const res = await csrfFetch(`/api/pets`, {
        method: 'POST',
        body: JSON.stringify(
            newPet
        )
    })
    const data = await res.json();
    // console.log('DATA IS AN ANDROID', data);
    dispatch(addOwnedPet(data));
    return res;
}

export const editPet = (editedPet) => async (dispatch) => {
console.log(editedPet, 'NEW PET');
    // const { name, type, forKids, url } = newPet;
    const res = await csrfFetch(`/api/pets`, {
        method: 'POST',
        body: JSON.stringify(
            editedPet
        )
    })
    const data = await res.json();
    // console.log('DATA IS AN ANDROID', data);
    dispatch(addOwnedPet(data));
    return res;
}

/* ----- REDUCER ------ */
const initialState = {};

const ownedPetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OWNED_PETS: {
            let newState = Object.assign({}, state);
            // console.log('NewState 1', newState)
            newState = action.payload;
            // console.log('NewState 2', newState)
            return newState;
        }
        case ADD_OWNED_PET: {
            let newState = Object.assign({}, state);
            console.log('payload', action.payload);
            newState = {...newState,
                [action.payload.id]: action.payload};
            return newState;
        }
        default: return state;
    }
};

export default ownedPetsReducer;
