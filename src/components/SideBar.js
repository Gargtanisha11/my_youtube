import React from "react";
import Explore from "./Explore";
import NormalButtonSideBar from "./NormalButtonSideBar";
import ExtraButtonSidebar from "./ExtraButtonSidebar";


const SideBar = ({info}) => {
  return (
    <div className={info==="videopage" ? " pl-6 w-[15%] h-[41rem] fixed top-20 bg-white overflow-y-scroll scroll-m-0 overflow-x-hidden" : " pl-6 w-[15%] h-[41rem] sticky top-20 bg-white overflow-y-scroll scroll-m-0 overflow-x-hidden"}>
      <NormalButtonSideBar/>
      <ExtraButtonSidebar/>
      <Explore/>
    </div>
  );
};

export default SideBar;
