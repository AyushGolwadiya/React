import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "lorem epsum lorem epsom john doe doede",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, title: "Download Now", color: "green" },
    },
    {
      desc: "lorem epsum lorem epsom john doe doede",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: true, title: "Upload", color: "blue" },
    },
    {
      desc: "lorem epsum lorem epsom john doe doede",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: false, title: "Download Now", color: "blue" },
    },
    
  ];
  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-3 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} key={index} refer={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
