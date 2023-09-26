import React from "react";
import Explore from "./Explore";
import NormalButtonSideBar from "./NormalButtonSideBar";
import ExtraButtonSidebar from "./ExtraButtonSidebar";


const SideBar = () => {
  return (
    <div className=" p-4 m-4 w-2/12 h-[41rem] sticky top-20 ">
      <NormalButtonSideBar/>
      <ExtraButtonSidebar/>
      <Explore/>
    </div>
  );
};

export default SideBar;
