import { db } from "../firebase/config"
import { types } from "../types"
import { loadNotes } from "../helpers/loadNotes"
import Swal from 'sweetalert2'
import { uploadImage } from "../helpers/uploadImage"

export const addNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.id
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote)
        dispatch(activeNote(docRef.id, newNote))
    }
}

export const activeNote = (uid, note) => ({
    type: types.NOTES_ACTIVE,
    payload: {
        id:uid,
        ...note
    }
})

export const startLoadNotes = (uid) => {
    return async dispatch => {
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const setNotes = (notes) => ({
    type: types.NOTES_LOAD,
    payload: notes
})

export const startSaveNote = (id, note) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.id
        if(!note.url){
            delete note.url
        }
        const noteToFirestore = {...note}
        delete noteToFirestore.id
        await db.doc(`${uid}/journal/notes/${id}`).update(noteToFirestore)
        dispatch(updateNote(id,noteToFirestore))
        Swal.fire('Saved', note.title , 'success')
    }
}

export const updateNote = (id,note) => ({
    type: types.NOTES_UPDATE,
    payload : {
        id, ...note
    }
})

export const uploadPicture = (file) => {
    return async (dispatch, getState) => {
        Swal.fire({
            title: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })
        const note = getState().notes.active
        const url = await uploadImage(file)
        note.url = url
        Swal.close()
        dispatch(startSaveNote(note.id, note))
    }
}