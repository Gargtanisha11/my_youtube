import { configureStore } from "@reduxjs/toolkit"
import hamburgerMenuReducer from  "./hamburgerSlice"
import suggestionsSlice from "./suggestionsSlice";
import chatSlice from "./chatSlice";

const myYoutubeStore=configureStore({
    reducer:{
        hamburgerMenu: hamburgerMenuReducer,
        suggestion:suggestionsSlice,
        chat:chatSlice,
        }
})

export default myYoutubeStore;