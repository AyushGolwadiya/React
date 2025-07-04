import React from "react";

const Background = () => {
  return (
    <>
    <div className="fixed z-[2] w-full h-screen">
      <div className="w-full py-10 flex justify-center text-zinc-200 font-medium">
        Documents
      </div>
      <h1 className="absolute text-[13vw] font-semibold text-zinc-700 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none tracking-tight">
        Docs.
      </h1>
    </div>
    </>
  );
};

export default Background;
