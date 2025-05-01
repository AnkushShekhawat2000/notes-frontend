export default function NoteCard({ note, onDelete }) {
    return (
      <div className="bg-white shadow-md p-4 rounded w-full">
        <h3 className="text-lg font-bold">{note.title}</h3>
        <p className="text-sm text-gray-700 mt-2">{note.content}</p>
        <button
          onClick={() => onDelete(note.id)}
          className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    );
  }
  