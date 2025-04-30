import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="fixed w-full flex items-center justify-center text-zinc-100 gap-10 py-5 border-b border-b-zinc-800  backdrop-blur-sm">
       <NavLink 
        to={"/add"}
        className={({ isActive }) => 
            isActive ? "text-indigo-400" : "hover:text-indigo-400 transition-colors"
        }
       >
        Add
       </NavLink>
       <NavLink 
        to={"/view"}
        className={({ isActive }) => 
            isActive ? "text-indigo-400" : "hover:text-indigo-400 transition-colors"
        }
       >
        View
       </NavLink>
    </nav>
  )
}

export default Navigation