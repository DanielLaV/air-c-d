// import { useSelector } from "react-redux";
import { csrfFetch } from "./csrf";

export const LOAD_OWNED_PETS = "LOAD_OWNED_PETS";
export const ADD_OWNED_PET = "ADD_OWNED_PET";
export const EDIT_OWNED_PET = "EDIT_OWNED_PET";
export const DELETE_OWNED_PET = "DELETE_OWNED_PET";




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

export const editOwnedPet = editedPet => {
    return {
        type: EDIT_OWNED_PET,
        payload: editedPet
    }
}

export const deleteOwnedPet = id => {
    return {
        type: DELETE_OWNED_PET,
        payload: id
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

export const addNewPet = (newPet) => async (dispatch) => {
    const res = await csrfFetch(`/api/pets`, {
        method: 'POST',
        body: JSON.stringify(
            newPet
        )
    })
    const data = await res.json();
    dispatch(addOwnedPet(data));
    return res;
}

export const editPet = (editedPet) => async (dispatch) => {
    const res = await csrfFetch(`/api/pets/${editedPet.id}`, {
        method: 'PUT',
        body: JSON.stringify(
            editedPet
        )
    })
    const data = await res.json();
    dispatch(addOwnedPet(data));
    return res;
}

export const deletePet = pet => async (dispatch) => {
    const res = await csrfFetch(`/api/pets/${pet.id}`, {
        method: 'DELETE',
        body: JSON.stringify(
            pet
        )
    })
    dispatch(deleteOwnedPet(pet.id));
    return res;
}

/* ----- REDUCER ------ */
const initialState = {};

const ownedPetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OWNED_PETS: {
            let newState = Object.assign({}, state);
            action.payload.Pets.forEach(pet => newState[pet.id] = pet);
            return newState;
        }
        case ADD_OWNED_PET: {
            let newState = Object.assign({}, state);
            newState = {
                ...newState,
                [action.payload.id]: action.payload
            };
            return newState;
        }
        case DELETE_OWNED_PET: {
            let newState = Object.assign({}, state);
            delete newState[action.payload];
            return newState;
        }
        default: return state;
    }
};

export default ownedPetsReducer;
