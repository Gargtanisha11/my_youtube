import React, { useEffect, useState } from "react";
import ChatCard from "./ChatCard";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/redux/chatSlice";
import { generate ,  generateString} from "../utils/helper";

const LiveChatComponent = () => {
  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.message);
const [myMessage,setMyMessage]= useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: generateString(),
        })
      );
      console.log("api polling ");
    }, 2000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className=" mt-6 border border-gray mr-10 rounded-lg h-[43rem]  py-4 w-96  ">
      <div className="h-[30rem] overflow-y-scroll mr-0 flex flex-col-reverse ">
        {message.map((m,index)=>(<ChatCard key={index} name={m.name} message={m.message}/>))}
      </div>
      <div className="  border-y border-gray p-5 h-32 ">
        <div className="flex flex-row">
          <input type="text" className=" border border-r-0 border-l-0 border-t-0 border-b-1 border-gray " value={myMessage} onChange={(e)=>{
            setMyMessage(e.target.value);

          }}/>
          <button className=" text-white bg-black font-semibold px-5 py-3 rounded-full  hover:bg-gray-800 active:bg-gray-950" onClick={()=>{
            dispatch(addMessage({name:"Tanisha garg" ,message:myMessage}))
            setMyMessage("");
          }} >Send</button>
        </div>
      </div>
    </div>
  );
};

export default LiveChatComponent;
