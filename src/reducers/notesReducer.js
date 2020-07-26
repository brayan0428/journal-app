import { types } from "../types"

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NOTES_ACTIVE: 
            return {
                ...state,
                active: action.payload
            }
        case types.NOTES_LOAD:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.NOTES_UPDATE:
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? action.payload : note)
            }
        default:
            return state
    }
}