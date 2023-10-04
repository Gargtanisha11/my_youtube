import React from "react";
import SideBar from "./SideBar";

import { useSelector } from "react-redux";
import BarClose from "./BarClose";
import { Outlet } from "react-router-dom";

const Body = () => {
  const hamburgerOpenInfo = useSelector(
    (store) => store.hamburgerMenu.isOpenMenu
  );

  return (
    <div className="flex ">
      { console.log(hamburgerOpenInfo)}
      {hamburgerOpenInfo ? <SideBar /> : <BarClose />}
      <Outlet />
    </div>
  );
};

export default Body;
