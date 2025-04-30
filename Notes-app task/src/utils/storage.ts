// this will handle notes crud 

// type of note
export interface Note{
    id:string;
    title:string;
    content:string;
    createdAt:string;
}

// constant
const STORAGE_KEY = "notes-app";

export const addNote = ( note:Note) :void =>{
    try {
        const savedNotes = getNotes();
        const updatedNotes = [...savedNotes,note];

        localStorage.setItem(STORAGE_KEY,JSON.stringify(updatedNotes));
    } catch (error) {
        console.error('Failed to save note',error);
    }
}

export const getNotes = () : Note[] => {
    try {
        const notesJson = localStorage.getItem(STORAGE_KEY);
        return notesJson ? JSON.parse(notesJson):[];
    } catch (error) {
        console.error('Failed to read notes:',error);
        return [];
    }
}

export const deleteNote = (id:string) :void =>{
    try{
        const notes = getNotes();
        const updatedNotes = notes.filter(note => note.id !== id);
        localStorage.setItem(STORAGE_KEY,JSON.stringify(updatedNotes));
    }
    catch(error){
        console.error('Failed to delte note:',error);
    }
}