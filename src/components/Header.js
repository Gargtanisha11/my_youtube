import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu, closeMenu } from "../utils/redux/hamburgerSlice";
import { cacheResult } from "../utils/redux/suggestionsSlice";

//
const Header = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const suggestionInfo = useSelector((store) => store.suggestion);
  

  const dispatch = useDispatch();
  const hamburgerOpenInfo = useSelector(
    (store) => store.hamburgerMenu.isOpenMenu
  );

  const handleHamburgerClick = () => {
    hamburgerOpenInfo ? dispatch(closeMenu()) : dispatch(openMenu());
  };

  const handleSuggestionClick = (s) => {
   setSearchQuery(s);
   setShowSuggestions(false);
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data.json();
   
    setSearchSuggestions(json[1]);
    dispatch(cacheResult({ [searchQuery]: json[1] }));
  };

  useEffect(() => {
    const Timer = setTimeout(() => {
      if (suggestionInfo[searchQuery]) {
        setSearchSuggestions(suggestionInfo[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  return (
    <div className=" grid grid-flow-col  h-20 sticky top-0 bg-white">
      <div className=" flex col-span-1 mx-4  px-2 b">
        <div
          className="h-10 my-4 mr-4  hover:bg-stone-200 rounded-full"
          onClick={handleHamburgerClick}
        >
          <img
            className="h-8 px-1 "
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt="No"
          />
        </div>
        <div className=" h-16 ">
          <img
            className=" h-16  "
            src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex col-span-10 my-5 pl-28 ">
        <div className=" h-auto">
          <input
            className="border border-solid border-gray-500 rounded-l-full  w-[34rem] h-9 bg-stone-100 px-7"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={()=>setTimeout(setShowSuggestions(false),200)}
          />
          {showSuggestions && (
            <div className="fixed rounded-lg border border-gray-400 w-[34rem] bg-white shadow-lg px-2 py-5 h-auto">
              <ul>
                {searchSuggestions.map((s) => (
                  <li
                    key={s}
                    className=" font-medium py-1 text-xl hover:bg-stone-100 cursor-default"
                    onClick={() => handleSuggestionClick(s)}
                  >
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
