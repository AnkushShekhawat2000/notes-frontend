# 📝 Authenticated Notes Dashboard

A fully responsive and modern **Notes Dashboard** with user authentication, note management features, dark/light theme support, and drag-and-drop functionality.

## 🚀 Live Demo
link -  https://startling-blini-71d4fe.netlify.app/

---

## ✨ Features

- 🔐 User Authentication (Email/Password & Google OAuth)
- 🗒️ Add, Edit, Delete Notes
- 🧲 Drag & Drop to reorder notes
- 🌗 Dark & Light Theme Toggle
- 🎨 Responsive UI with Tailwind CSS
- ⚡ Smooth Animations via Framer Motion

---

## 📁 File Structure

```bash
src/
├── api/
│   └── api.js               # Axios instance for API requests
├── components/
│   └── ProtectedRoute.jsx   # Route protection for authenticated pages
├── hooks/
│   └── useTheme.js          # Custom hook for toggling themes
├── pages/
│   ├── Login.jsx            # Login page
│   ├── Signup.jsx           # Signup page
│   └── Dashboard.jsx        # Main notes dashboard
├── App.jsx                  # Route definitions
├── main.jsx                 # App entry point
└── index.css                # Tailwind + global styles
```

---

## 🔐 Authentication Flow

- Firebase Authentication is used (Email & Google OAuth).
- `localStorage` stores the user token after login.
- Protected routes block unauthenticated access.

---

## 🎨 Theme Support

- Dark/light theme is implemented using Tailwind’s `dark:` classes.
- `useTheme` hook toggles the mode.
- Persisted via `localStorage` and applied to `<html>` tag.

---

## 🧲 Drag and Drop

- Implemented with `@hello-pangea/dnd`.
- Notes can be dragged to reorder.
- Order is updated in local state and can optionally be saved in backend.

---

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS, Framer Motion, Lucide React
- **Authentication**: Firebase Auth
- **State Management**: useState, useEffect, Context API
- **Routing**: React Router
- **Drag & Drop**: `@hello-pangea/dnd`
- **Icons**: `lucide-react`, `react-icons`

---

## 📦 Installation & Setup

```bash
# Clone the repository
frontend--> 
git clone https://github.com/AnkushShekhawat2000/notes-App


Backend --> git clone https://github.com/AnkushShekhawat2000/notes-App

# Install dependencies
npm install

# Create .env file and add Firebase credentials
cp .env.example .env

# Start the app
npm start
```

---

## 📸 Screenshots

> Add some screenshots of your login page, dashboard, dark mode, and drag-drop notes here.
![alt text](/screenshots/image-1.png)

Error show
![alt text](/screenshots/image.png)

---Singup page 
![alt text](/screenshots/image-1.png)


dashboard page
![alt text](/screenshots/image-2.png)

Dark Theme
![alt text](/screenshots/image-3.png)

## 🤔 Design Decisions

- Tailwind enables a clean, utility-first responsive UI.
- Drag-drop via `@hello-pangea/dnd` ensures smooth reordering.
- Framer Motion brings modern, lightweight animation to enhance UX.

---
