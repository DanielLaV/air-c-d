export const LOAD_USER = 'LOAD_USER';
export const REMOVE_USER = 'REMOVE_USER';


/* ------- ACTIONS ------- */

export const loadUser = (user) => ({
    type: LOAD_USER,
    user: {
        id,
        email,
        username,
        createdAt,
        updatedAt
      }
})

export const removeUser = (user) => ({
    type: REMOVE_USER,
    user: null
})

/* ------ REDUCER ------ */

export default function sessionReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_USER: {
            return {
                ...state,
                user
            }
        }
        default: {
            user: null
        }

    }
}
