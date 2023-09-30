import React from "react";
import Button from "./Button";

const UpperButtons = () => {
  const Buttonlist=['All',"Music","Computer Programming","Gaming","Live","Animated Films","Mantras ","Satsang","Physics","News"]
  return (
    <div className="px-3 py-4 flex flex-wrap ">
     {Buttonlist.map(list=><Button key={list} name={list}/>)}
    </div>
  );
};

export default UpperButtons;
