import React from "react";
import { Link } from "react-router-dom";
const NormalButtonSideBar = () => {
  return (
    <div className="border  border-b-1 border-t-0 border-l-0 border-r-0 border-gray-400">
      <div className="p-1 flex">
        <img
          className=" w-14"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuYyQVZ2NarcH7JSWx8pgzZQMGv6AHxOYag&usqp=CAU"
          alt=""
        />
        <Link to="/"><button className="py-4">Home</button></Link>
      </div>
      <div className="py-2 px-5 flex">
        <img
          className="w-5 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC56YvgN8x2hv6lVkMtTasrIFXE2zB4gWYzQ&usqp=CAU"
          alt=""
        />
        <button className="pl-6">Shorts</button>
      </div>
      <div className="py-3 px-3 flex">
        <img
          className="w-8"
          src="https://static.thenounproject.com/png/4530414-200.png"
          alt="subs"
        />
        <button className="pl-5">Subscription</button>
      </div>
    </div>
  );
};

export default NormalButtonSideBar;
