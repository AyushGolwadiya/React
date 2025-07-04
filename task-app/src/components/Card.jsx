import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload, LuHeading1 } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react";

const Card = ({ data, refer }) => {
  return (
    <motion.div
      drag
      dragConstraints={refer}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{bounceDamping:10,bounceStiffness:600}}
      className="flex-shrink-0 relative w-55 h-72 rounded-[30px] bg-zinc-900/90 text-white py-8 px-5 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-regular">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex justify-between items-center px-5 py-3 mb-1">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload color="#fff" />}
          </span>
        </div>
        {data.tag?.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.color === "blue" ? "bg-blue-500" : "bg-green-500"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-medium tracking-wide">
              {data.tag.title}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
