import { useState } from "react";
import { addNote } from "../utils/storage";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();

    if(!title.trim() || !content.trim()){
      setError('Please Fill in both title and content');
      return;
    }
    setIsSaving(true);
    setError('');

    try{
      const newNote = {
        id:Date.now().toString(),
        title,
        content,
        createdAt:new Date().toISOString()
      }
      addNote(newNote);
      setTitle('');
      setContent('');
    }
    catch(error){
      setError('Failed to save note');
    }
    finally{
      setIsSaving(false)
    }
  }

  return (
    <div className="flex justify-center">
    <div className="w-1/2 h-1/2 bg-zinc-900/90 text-zinc-100 p-6 rounded-lg shadow-md z-[1]">
      <h2 className="text-xl font-bold mb-4">Add New Note</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            name="Title"
            value={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            placeholder="Title goes here"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium"
          >
            Content
          </label>
          <input type="text"
            id="content"
            value={content}
            placeholder="Enter Note"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2 border"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button type="submit" disabled={isSaving} className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50">
          {isSaving ? 'Saving...' : 'Save Note'}
        </button>
      </form>
    </div>
    </div>
  );
};

export default AddNote;
