import { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="w-full h-[10vh] relative text-zinc-400 flex justify-start items-center ml-[30%]">
      <i className="text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 text-zinc-200 outline-none border-none"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && <i
      onClick={() => setQuery('')}
      className="cursor-pointer text-2xl ri-close-fill"></i>}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] overflow-auto">
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold p-10 w-full flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>Hello Everyone</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
