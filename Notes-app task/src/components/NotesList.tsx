import { useEffect, useState } from "react";
import { getNotes, deleteNote, Note } from "../utils/storage";

const NotesList = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleDelete = (id: string) => {
    deleteNote(id);
    setNotes(getNotes()); 
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4 text-gray-300">Saved Notes</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note.id} className="bg-white p-4 rounded shadow relative">
              <h3 className="text-lg font-semibold text-indigo-600">
                {note.title}
              </h3>
              <p className="text-gray-700 mt-2">{note.content}</p>
              <p className="text-sm text-gray-400 mt-2">
                {new Date(note.createdAt).toLocaleString()}
              </p>
              <button
                onClick={() => handleDelete(note.id)}
                className="absolute top-2 right-2 font-semibold text-red-600 hover:text-red-800 text-xl cursor-pointer"
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
