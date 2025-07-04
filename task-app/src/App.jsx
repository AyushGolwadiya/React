import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800 font-["Gilroy"] selection:text-[#afafaf]'>
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
