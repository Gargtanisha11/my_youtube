import React from "react";
import Button from "./Button";

const UpperButtons = () => {
  const Buttonlist=['All',"Music","Computer Programming","Gaming","Live","Animated Films","Mantras ","Satsang","Physics","News"]
  return (
    <div className="px-10 py-5 flex flex-wrap">
     {Buttonlist.map(list=><Button key={list} name={list}/>)}
    </div>
  );
};

export default UpperButtons;
