



// // // // import React, { useEffect, useState } from 'react';
// // // // import API from '../api/api';
// // // // import { motion } from "framer-motion";

// // // // export default function Dashboard() {
// // // //   const [notes, setNotes] = useState([]);
// // // //   const [title, setTitle] = useState('');
// // // //   const [content, setContent] = useState('');
// // // //   const [editId, setEditId] = useState(null); // for editing

// // // //   const fetchNotes = async () => {
// // // //     try {
// // // //       const res = await API.get('/notes');
// // // //       setNotes(res.data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const handleSaveNote = async () => {
// // // //     try {
// // // //       if (editId) {
// // // //         // Update
// // // //         await API.put(`/notes/${editId}`, { title, content });
// // // //         setEditId(null);
// // // //       } else {
// // // //         // Create
// // // //         await API.post('/notes', { title, content });
// // // //       }
// // // //       setTitle('');
// // // //       setContent('');
// // // //       fetchNotes();
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const handleDelete = async (id) => {
// // // //     try {
// // // //       await API.delete(`/notes/${id}`);
// // // //       fetchNotes();
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const handleEdit = (note) => {
// // // //     setTitle(note.title);
// // // //     setContent(note.content);
// // // //     setEditId(note._id);
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchNotes();
// // // //   }, []);

// // // //   return (
// // // //     <div className="p-6 max-w-4xl mx-auto">
// // // //       <h1 className="text-2xl font-bold mb-4">Your Notes</h1>

// // // //       {/* Create / Edit Form */}
// // // //       <div className="mb-6 bg-white p-4 rounded-xl shadow">
// // // //         <input
// // // //           value={title}
// // // //           onChange={(e) => setTitle(e.target.value)}
// // // //           placeholder="Title"
// // // //           className="input mb-2"
// // // //         />
// // // //         <textarea
// // // //           value={content}
// // // //           onChange={(e) => setContent(e.target.value)}
// // // //           placeholder="Content"
// // // //           className="input mb-2"
// // // //         />
// // // //         <button onClick={handleSaveNote} className="btn">
// // // //           {editId ? "Update Note" : "Add Note"}
// // // //         </button>
// // // //       </div>

// // // //       {/* Notes List */}
// // // //       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
// // // //         {notes.map((note, index) => (
// // // //           <motion.div
// // // //             key={note._id}
// // // //             className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.3, delay: index * 0.05 }}
// // // //             whileHover={{ scale: 1.03 }}
// // // //           >
// // // //             <h2 className="text-lg font-semibold">{note.title}</h2>
// // // //             <p className="text-sm mt-2">{note.content}</p>
// // // //             <div className="mt-4 flex justify-between text-sm text-blue-600">
// // // //               <button onClick={() => handleEdit(note)}>Edit</button>
// // // //               <button onClick={() => handleDelete(note._id)} className="text-red-600">
// // // //                 Delete
// // // //               </button>
// // // //             </div>
// // // //           </motion.div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }




// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { motion } from 'framer-motion';
// // // import API from '../api/api';

// // // export default function Dashboard() {
// // //   const [notes, setNotes] = useState([]);
// // //   const [title, setTitle] = useState('');
// // //   const [content, setContent] = useState('');
// // //   const [editId, setEditId] = useState(null);

// // //   const navigate = useNavigate();

// // //   // Logout handler
// // //   const handleLogout = () => {
// // //     localStorage.removeItem('token');
// // //     navigate('/login');
// // //   };

// // //   // Fetch all notes
// // //   const fetchNotes = async () => {
// // //     try {
// // //       const res = await API.get('/notes');
// // //       setNotes(res.data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchNotes();
// // //   }, []);

// // //   // Create or Update note
// // //   const handleSaveNote = async () => {
// // //     try {
// // //       if (editId) {
// // //         await API.put(`/notes/${editId}`, { title, content });
// // //         setEditId(null);
// // //       } else {
// // //         await API.post('/notes', { title, content });
// // //       }
// // //       setTitle('');
// // //       setContent('');
// // //       fetchNotes();
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handleDelete = async (id) => {
// // //     try {
// // //       await API.delete(`/notes/${id}`);
// // //       fetchNotes();
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handleEdit = (note) => {
// // //     setTitle(note.title);
// // //     setContent(note.content);
// // //     setEditId(note._id);
// // //   };

// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       className="p-6 max-w-5xl mx-auto"
// // //     >
// // //       {/* Header */}
// // //       <div className="flex justify-between items-center mb-6">
// // //         <h1 className="text-3xl font-bold text-blue-700">📒 My Notes</h1>
// // //         <button
// // //           onClick={handleLogout}
// // //           className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
// // //         >
// // //           Logout
// // //         </button>
// // //       </div>

// // //       {/* Note Form */}
// // //       <div className="bg-white p-6 rounded-xl shadow-md mb-8">
// // //         <input
// // //           value={title}
// // //           onChange={(e) => setTitle(e.target.value)}
// // //           placeholder="Title"
// // //           className="w-full mb-3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //         />
// // //         <textarea
// // //           value={content}
// // //           onChange={(e) => setContent(e.target.value)}
// // //           placeholder="Content"
// // //           rows="4"
// // //           className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //         />
// // //         <button
// // //           onClick={handleSaveNote}
// // //           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
// // //         >
// // //           {editId ? 'Update Note' : 'Add Note'}
// // //         </button>
// // //       </div>

// // //       {/* Notes List */}
// // //       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //         {notes.map((note, index) => (
// // //           <motion.div
// // //             key={note._id}
// // //             className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.3, delay: index * 0.05 }}
// // //             whileHover={{ scale: 1.02 }}
// // //           >
// // //             <h2 className="text-lg font-semibold text-gray-800">{note.title}</h2>
// // //             <p className="text-sm text-gray-600 mt-2">{note.content}</p>
// // //             <div className="mt-4 flex justify-between text-sm">
// // //               <button
// // //                 onClick={() => handleEdit(note)}
// // //                 className="text-blue-600 hover:underline"
// // //               >
// // //                 Edit
// // //               </button>
// // //               <button
// // //                 onClick={() => handleDelete(note._id)}
// // //                 className="text-red-500 hover:underline"
// // //               >
// // //                 Delete
// // //               </button>
// // //             </div>
// // //           </motion.div>
// // //         ))}
// // //       </div>
// // //     </motion.div>
// // //   );
// // // }




// // import React, { useEffect, useState } from "react";
// // import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
// // import { useNavigate } from "react-router-dom";
// // import API from "../api/api";
// // import { motion } from "framer-motion";
// // import { Menu, Plus, LogOut } from "lucide-react"; // Icons

// // const Dashboard = () => {
// //   const navigate = useNavigate();
// //   const [notes, setNotes] = useState([]);
// //   const [title, setTitle] = useState("");
// //   const [content, setContent] = useState("");
// //   const [editId, setEditId] = useState(null);

// //   // Fetch notes on mount
// //   const fetchNotes = async () => {
// //     try {
// //       const res = await API.get("/notes");
// //       setNotes(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleDragEnd = (result) => {
// //     if (!result.destination) return;

// //     const reordered = Array.from(notes);
// //     const [removed] = reordered.splice(result.source.index, 1);
// //     reordered.splice(result.destination.index, 0, removed);

// //     setNotes(reordered);
// //     // Optionally: persist this order to backend
// //   };
// //   useEffect(() => {
// //     fetchNotes();
// //   }, []);

// //   const handleSave = async () => {
// //     if (!title || !content) return;
// //     try {
// //       if (editId) {
// //         await API.put(`/notes/${editId}`, { title, content });
// //         setEditId(null);
// //       } else {
// //         await API.post("/notes", { title, content });
// //       }
// //       setTitle("");
// //       setContent("");
// //       fetchNotes();
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleEdit = (note) => {
// //     setTitle(note.title);
// //     setContent(note.content);
// //     setEditId(note._id);
// //   };

// //   const handleDelete = async (id) => {
// //     try {
// //       await API.delete(`/notes/${id}`);
// //       fetchNotes();
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-100">
// //       {/* Sidebar */}
// //       <aside className="w-64 bg-white p-6 shadow-md hidden md:block">
// //         <h2 className="text-2xl font-bold mb-10 text-blue-700">MyNotes</h2>
// //         <button
// //           onClick={handleLogout}
// //           className="flex items-center gap-2 text-red-600 hover:underline"
// //         >
// //           <LogOut size={18} /> Logout
// //         </button>
// //       </aside>

// //       {/* Main Section */}
// //       <div className="flex-1 flex flex-col overflow-hidden">
// //         {/* Topbar */}
// //         <header className="bg-white shadow p-4 flex items-center justify-between">
// //           <div className="md:hidden">
// //             <Menu />
// //           </div>
// //           <h1 className="text-xl font-semibold text-blue-600">Dashboard</h1>
// //         </header>

// //         {/* Content */}
// //         <main className="p-6 overflow-y-auto flex-1">
// //           {/* Note Input */}
// //           <div className="bg-white p-6 rounded-xl shadow mb-6">
// //             <input
// //               type="text"
// //               placeholder="Note Title"
// //               value={title}
// //               onChange={(e) => setTitle(e.target.value)}
// //               className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
// //             />
// //             <textarea
// //               rows="4"
// //               placeholder="Write your note..."
// //               value={content}
// //               onChange={(e) => setContent(e.target.value)}
// //               className="w-full mb-4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
// //             />
// //             <button
// //               onClick={handleSave}
// //               className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// //             >
// //               <Plus size={18} /> {editId ? "Update Note" : "Add Note"}
// //             </button>
// //           </div>

// //           {/* Notes Grid */}
// //           {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// //             {notes.map((note, index) => (
// //               <motion.div
// //                 key={note._id}
// //                 className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-200 border border-gray-200"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 whileHover={{ scale: 1.02 }}
// //                 transition={{ duration: 0.3, delay: index * 0.05 }}
// //               >
// //                 <h2 className="text-lg font-bold text-blue-700">{note.title}</h2>
// //                 <p className="text-sm text-gray-600 mt-2">{note.content}</p>
// //                 <div className="flex justify-end gap-4 mt-4 text-sm">
// //                   <button
// //                     onClick={() => handleEdit(note)}
// //                     className="text-blue-500 hover:underline"
// //                   >
// //                     Edit
// //                   </button>
// //                   <button
// //                     onClick={() => handleDelete(note._id)}
// //                     className="text-red-500 hover:underline"
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div> */}
// //           <DragDropContext onDragEnd={handleDragEnd}>
// //           <Droppable droppableId="notes" direction="vertical">
// //               {(provided) => (
// //                 <div
// //                   className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
// //                   {...provided.droppableProps}
// //                   ref={provided.innerRef}
// //                 >
// //                   {notes.map((note, index) => (
// //                     <Draggable key={note._id} draggableId={note._id} index={index}>
// //                       {(provided) => (
// //                         <motion.div
// //                           ref={provided.innerRef}
// //                           {...provided.draggableProps}
// //                           {...provided.dragHandleProps}
// //                           className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-200 border border-gray-200"
// //                           initial={{ opacity: 0, y: 10 }}
// //                           animate={{ opacity: 1, y: 0 }}
// //                           whileHover={{ scale: 1.02 }}
// //                           transition={{ duration: 0.3, delay: index * 0.05 }}
// //                         >
// //                           <h2 className="text-lg font-bold text-blue-700">
// //                             {note.title}
// //                           </h2>
// //                           <p className="text-sm text-gray-600 mt-2">{note.content}</p>
// //                           <div className="flex justify-end gap-4 mt-4 text-sm">
// //                             <button
// //                               onClick={() => handleEdit(note)}
// //                               className="text-blue-500 hover:underline"
// //                             >
// //                               Edit
// //                             </button>
// //                             <button
// //                               onClick={() => handleDelete(note._id)}
// //                               className="text-red-500 hover:underline"
// //                             >
// //                               Delete
// //                             </button>
// //                           </div>
// //                         </motion.div>
// //                       )}
// //                     </Draggable>
// //                   ))}
// //                   {provided.placeholder}
// //                 </div>
// //               )}
// //             </Droppable>
// //           </DragDropContext>

// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;




// import React, { useEffect, useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
// import { useNavigate } from "react-router-dom";
// import API from "../api/api";
// import { motion } from "framer-motion";
// import { Menu, Plus, LogOut } from "lucide-react";

// import { Sun, Moon } from "lucide-react";
// import { useTheme } from "../hooks/useTheme"



// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [editId, setEditId] = useState(null);
//   const { theme, toggleTheme } = useTheme();

//   const fetchNotes = async () => {
//     try {
//       const res = await API.get("/notes");
//       setNotes(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   const handleSave = async () => {
//     if (!title || !content) return;
//     try {
//       if (editId) {
//         await API.put(`/notes/${editId}`, { title, content });
//         setEditId(null);
//       } else {
//         await API.post("/notes", { title, content });
//       }
//       setTitle("");
//       setContent("");
//       fetchNotes();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleEdit = (note) => {
//     setTitle(note.title);
//     setContent(note.content);
//     setEditId(note._id);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await API.delete(`/notes/${id}`);
//       fetchNotes();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const reordered = Array.from(notes);
//     const [removed] = reordered.splice(result.source.index, 1);
//     reordered.splice(result.destination.index, 0, removed);
//     setNotes(reordered);
//     // Optional: persist order to backend
//   };

//   return (
//     // <div className="flex h-screen bg-gray-100">
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white p-6 shadow-md hidden md:block">
//         <h2 className="text-2xl font-bold mb-10 text-blue-700">MyNotes</h2>
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-2 text-red-600 hover:underline"
//         >
//           <LogOut size={18} /> Logout
//         </button>
//       </aside>

//       {/* Main Section */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Topbar */}
//         <header className="bg-white shadow p-4 flex items-center justify-between">
//           <div className="md:hidden">
//             <Menu />
//           </div>
//           <h1 className="text-xl font-semibold text-blue-600">Dashboard</h1>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="text-blue-600 dark:text-yellow-300"
//               title="Toggle Dark Mode"
//             >
//               {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>

//         </header>

//         {/* Content */}
//         <main className="p-6 overflow-y-auto flex-1">
//           {/* Note Input */}
//           <div className="bg-white p-6 rounded-xl shadow mb-6">
//             <input
//               type="text"
//               placeholder="Note Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
//             />
//             <textarea
//               rows="4"
//               placeholder="Write your note..."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full mb-4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               onClick={handleSave}
//               className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               <Plus size={18} /> {editId ? "Update Note" : "Add Note"}
//             </button>
//           </div>

//           {/* Notes List with Drag and Drop */}
//           <DragDropContext onDragEnd={handleDragEnd}>
//             <Droppable droppableId="notes">
//               {(provided) => (
//                 <div
//                   className="flex flex-wrap gap-6"
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {notes.map((note, index) => (
//                     <Draggable key={note._id} draggableId={note._id} index={index}>
//                       {(provided) => (
//                         <motion.div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           className="w-full sm:w-[48%] md:w-[30%] bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-200 border border-gray-200"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           whileHover={{ scale: 1.02 }}
//                           transition={{ duration: 0.3, delay: index * 0.05 }}
//                         >
//                           <h2 className="text-lg font-bold text-blue-700">{note.title}</h2>
//                           <p className="text-sm text-gray-600 mt-2">{note.content}</p>
//                           <div className="flex justify-end gap-4 mt-4 text-sm">
//                             <button
//                               onClick={() => handleEdit(note)}
//                               className="text-blue-500 hover:underline"
//                             >
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleDelete(note._id)}
//                               className="text-red-500 hover:underline"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </motion.div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </DragDropContext>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { useTheme } from "../hooks/useTheme";

import { FaEdit, FaTrash } from "react-icons/fa"; // Import the icons
import { motion } from "framer-motion";
import { LogOut, Sun, Moon, Plus, Menu } from "react-feather"; // Import other icons if needed

const Dashboard = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const { theme, toggleTheme } = useTheme();

  // Fetch notes from API
  const fetchNotes = async () => {
    try {
      const res = await API.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSave = async () => {
    if (!title || !content) return;
    try {
      if (editId) {
        await API.put(`/notes/${editId}`, { title, content });
        setEditId(null);
      } else {
        await API.post("/notes", { title, content });
      }
      setTitle("");
      setContent("");
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  // const handleEdit = (note) => {
  //   setTitle(note.title);
  //   setContent(note.content);
  //   setEditId(note._id);
  // };

  
  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note._id);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(notes);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    setNotes(reordered);
    // Optionally: persist order to backend
  };


  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-md hidden md:block">
        <h2 className="text-2xl font-bold mb-10 text-blue-700 dark:text-blue-300">
          MyNotes
        </h2>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-600 hover:underline"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between">
          <div className="md:hidden">
            <Menu/>
          </div>
          <h1 className="text-xl font-semibold text-blue-600 dark:text-blue-300">
            Dashboard
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-blue-600 dark:text-yellow-300"
              title="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 overflow-y-auto flex-1">
          {/* Note Input */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6">
            <input
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mb-3 px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Write your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <Plus size={18} /> {editId ? "Update Note" : "Add Note"}
            </button>
          </div>

          {/* Notes List with Drag and Drop */}
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="notes">
              {(provided) => (
                <div
                  className="flex flex-wrap gap-6"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {notes.map((note, index) => (
                    <Draggable key={note._id} draggableId={note._id} index={index}>
                      {(provided) => (
                        <motion.div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="w-full sm:w-[48%] md:w-[30%] bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-200 border border-gray-200 dark:border-gray-700"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <h2 className="text-lg font-bold text-blue-700 dark:text-blue-300">
                            {note.title}
                          </h2>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                            {note.content}
                          </p>
                          <div className="flex justify-end gap-4 mt-4 text-sm">
                            <button
                              onClick={() => handleEdit(note)}
                              className="text-blue-500 hover:underline"
                            >
                              <FaEdit size={16} className="inline" /> {/* Edit Icon */}
                            </button>
                            <button
                              onClick={() => handleDelete(note._id)}
                              className="text-red-500 hover:underline"
                            >
                              <FaTrash size={16} className="inline" /> {/* Delete Icon */}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
//   return (
//     <div className="flex h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-md hidden md:block">
//         <h2 className="text-2xl font-bold mb-10 text-blue-700 dark:text-blue-300">
//           MyNotes
//         </h2>
//         <button
//           onClick={handleLogout}
//           className="flex items-center gap-2 text-red-600 hover:underline"
//         >
//           <LogOut size={18} /> Logout
//         </button>
//       </aside>

//       {/* Main Section */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Topbar */}
//         <header className="bg-white dark:bg-gray-800 shadow p-4 flex items-center justify-between">
//           <div className="md:hidden">
//             <Menu />
//           </div>
//           <h1 className="text-xl font-semibold text-blue-600 dark:text-blue-300">
//             Dashboard
//           </h1>
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="text-blue-600 dark:text-yellow-300"
//               title="Toggle Dark Mode"
//             >
//               {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="p-6 overflow-y-auto flex-1">
//           {/* Note Input */}
//           <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6">
//             <input
//               type="text"
//               placeholder="Note Title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full mb-3 px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-400"
//             />
//             <textarea
//               rows="4"
//               placeholder="Write your note..."
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full mb-4 px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-black dark:text-white focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               onClick={handleSave}
//               className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               <Plus size={18} /> {editId ? "Update Note" : "Add Note"}
//             </button>
//           </div>

//           {/* Notes List with Drag and Drop */}
//           <DragDropContext onDragEnd={handleDragEnd}>
//             <Droppable droppableId="notes">
//               {(provided) => (
//                 <div
//                   className="flex flex-wrap gap-6"
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                 >
//                   {notes.map((note, index) => (
//                     <Draggable key={note._id} draggableId={note._id} index={index}>
//                       {(provided) => (
//                         <motion.div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           className="w-full sm:w-[48%] md:w-[30%] bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-lg transition duration-200 border border-gray-200 dark:border-gray-700"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           whileHover={{ scale: 1.02 }}
//                           transition={{ duration: 0.3, delay: index * 0.05 }}
//                         >
//                           <h2 className="text-lg font-bold text-blue-700 dark:text-blue-300">
//                             {note.title}
//                           </h2>
//                           <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
//                             {note.content}
//                           </p>
//                           <div className="flex justify-end gap-4 mt-4 text-sm">
//                             <button
//                               onClick={() => handleEdit(note)}
//                               className="text-blue-500 hover:underline"
//                             >
//                               Edit
//                             </button>
//                             <button
//                               onClick={() => handleDelete(note._id)}
//                               className="text-red-500 hover:underline"
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </motion.div>
//                       )}
//                     </Draggable>
//                   ))}
//                   {provided.placeholder}
//                 </div>
//               )}
//             </Droppable>
//           </DragDropContext>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


