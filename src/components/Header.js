import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu ,closeMenu } from "../utils/redux/hamburgerSlice";

//
const Header = () => {
  const dispatch=useDispatch();
  const hamburgerOpenInfo=useSelector((store)=>(store.hamburgerMenu.isOpenMenu));
  const handleHamburgerClick=()=>{
    hamburgerOpenInfo ? dispatch(closeMenu()) : dispatch(openMenu());
  }
 console.log(hamburgerOpenInfo);
  return (
    <div className=" grid grid-flow-col  h-20 ">
      <div className=" flex col-span-1 mx-4  px-2">
        <div className="h-8 my-4 pr-4 " onClick={handleHamburgerClick}>
          <img
            className="h-8  active:bg-stone-300"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSbeky9U1m4VnlgFNbLLxds3SFpUoJbLWLeNQuQqI&s"
            alt="No"
          />
        </div>
        <div className=" h-16 ">
          <img
            className=" h-16 "
            src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex col-span-10 my-5 pl-28 ">
        <input
          className="border border-solid border-gray-500 rounded-l-full  w-1/2 h-9 bg-stone-100"
          type="text"
        />

        <div className="border border-solid  border-gray-500 rounded-r-full w-16 h-9 p-1  active:bg-stone-300 bg-stone-100">
          <button>Search</button>
        </div>
      </div>
      <div className=" col-span-1 my-5">
        <img
          className="h-9"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
