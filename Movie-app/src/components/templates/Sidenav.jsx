import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const linkdata = [
    {
      name: "Trending",
      icon: <i className="ri-fire-fill"></i>,
    },
    {
      name: "Popular",
      icon: <i className="ri-bard-fill"></i>,
    },
    {
      name: "Movies",
      icon: <i className="ri-movie-2-fill"></i>,
    },
    {
      name: "Tv Shows",
      icon: <i className="ri-tv-2-fill"></i>,
    },
    {
      name: "People",
      icon: <i className="ri-team-fill"></i>,
    },
  ];
  return (
    <div className="sidebar w-[20%] h-full border-r-2 border-zinc-400 px-10 py-5">
      <h1 className="text-2xl">
        <i className="text-[#6556cd] ri-tv-fill mr-2"></i>
        <span className="text-white font-semibold ">AGCSDB.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-md gap-3">
        <h1 className="text-white font-normal text-lg mt-5 mb-1">New feeds</h1>
        {linkdata.map((item, index) => (
          <Link
            className="hover:bg-[#6556cd] hover:font-semibold hover:text-white duration-200 rounded-lg px-5 py-3 gap-2 flex"
            key={index}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 my-1" />
      <nav className="flex flex-col text-zinc-400 text-md gap-3">
        <h1 className="text-white font-normal text-lg mt-5 mb-1">
          Website Information
        </h1>
        {[
          { name: "About us", icon: <i className="ri-information-2-fill"></i> },
          { name: "Contact us", icon: <i className="ri-phone-fill"></i> },
        ].map((item, index) => (
          <Link
            key={index}
            className="hover:bg-[#6556cd] hover:font-bold hover:text-white duration-200 rounded-lg px-5 py-3 gap-2 flex"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidenav;
