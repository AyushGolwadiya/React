import { Route, Routes } from "react-router-dom"
import AddNote from "./components/AddNote"
import Background from "./components/Background"
import Navigation from "./components/Navigation"
import NotesList from "./components/NotesList"

const App = () => {
  return (
    <>
      <Background />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16 mt-5">
          <Routes>
            <Route path="/add" element={<AddNote />}/>
            <Route path="/view" element={<NotesList />}/>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App