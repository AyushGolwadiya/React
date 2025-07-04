import { createContext, useState } from "react"

export const UserContext = createContext();

const Context = (props) => {
    const [users,setUsers] = useState([
        {id:0,username:"John Doe",email:"john@doe.com",city:"New-York"},
        {id:1,username:"John Dode",email:"john@dode.com",city:"New-Jersey"},
        {id:2,username:"John Kids",email:"john@kids.com",city:"NYC"},
    ]);

  return (
    <UserContext.Provider value={{users,setUsers}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default Context