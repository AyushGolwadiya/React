import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "../store/reducers/UserReducer";

const App = () => {
  const { users } = useSelector((state) => state.UserReducer);
  const dispatch =  useDispatch();

  const DeleteHandler = ( id ) => {
    dispatch(userDelete(id));
  }

  return (
    <div className="mx-auto h-1/2 container p-10 mt-5 bg-zinc-300">
      <h1 className="text-2xl font-bold text-zinc-800">User list</h1>
      {users.map((user,index) => (
        <h1 className="text-md text-zinc-700" key={user.id}>
          {user.name}
          <span onClick={() => DeleteHandler(index)} className="text-red-500 font-semibold mx-2 cursor-pointer">x</span>
        </h1>
      ))}
    </div>
  );
};

export default App;
