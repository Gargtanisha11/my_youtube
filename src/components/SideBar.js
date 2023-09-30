import React from "react";
import Explore from "./Explore";
import NormalButtonSideBar from "./NormalButtonSideBar";
import ExtraButtonSidebar from "./ExtraButtonSidebar";


const SideBar = () => {
  return (
    <div className=" pl-2 mx-4 w-[12%] h-[41rem] sticky top-20 ">
      <NormalButtonSideBar/>
      <ExtraButtonSidebar/>
      <Explore/>
    </div>
  );
};

export default SideBar;
