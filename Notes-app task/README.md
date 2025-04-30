# Notes App

A simple, elegant note-taking application built with React and TypeScript, featuring client-side storage and a modern UI.

## 🚀 Features

- Add and view notes
- Persistent storage using localStorage
- Modern, responsive design
- Loading states and error handling
- Clean and intuitive user interface

## 🛠️ Tech Stack

- React + TypeScript
- Tailwind CSS for styling
- React Router for navigation
- LocalStorage for data persistence

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🎯 Design Decisions

### Storage Strategy
- **Why localStorage?** 
  - Simple and built-in browser storage solution
  - No backend required for this small application
  - Persists data across page refreshes
  - Key naming: Using "notes-app" as the storage key for clear identification

### Component Structure
- **Why this component hierarchy?**
  - `App.tsx`: Main layout and routing
  - `AddNote.tsx`: Form component for creating new notes
  - `NotesList.tsx`: Display component for viewing all notes
  - `Navigation.tsx`: Simple tab-based navigation

### State Management
- **Why useState + this submit handler?**
  - Simple form state management with controlled inputs
  - Clear data flow from form to storage
  - Immediate feedback with loading states
  - Error handling for storage operations

### Navigation
- **Why this nav approach?**
  - Simple tab-based navigation for two main views
  - Clear visual feedback for active route
  - Minimal and intuitive user experience
  - Fixed position for easy access

### Styling
- **Why Tailwind CSS?**
  - Rapid development with utility classes
  - Consistent design system
  - Responsive design out of the box
  - Dark theme for reduced eye strain
  - Modern, clean aesthetic with proper spacing and typography

### Error Handling
- **Why show spinner here?**
  - Prevents multiple submissions
  - Clear indication of processing state


- **Why display error banner?**
  - Clear communication of issues to users
  - Non-blocking error display
  - Consistent error styling
  - Automatic dismissal with state updates

## 🎨 UI/UX Features

- Dark theme with consistent color scheme
- Responsive grid layout for notes
- Error messages with clear styling
- Smooth transitions and hover effects
- Proper spacing and typography hierarchy

## 📝 Notes on Implementation

- All data is stored in localStorage
- Notes include title, content, and creation timestamp
- Form validation for required fields
- Responsive design for all screen sizes
- Clean, modern UI with proper spacing

