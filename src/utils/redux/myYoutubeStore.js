import { configureStore } from "@reduxjs/toolkit"
import hamburgerMenuReducer from  "./hamburgerSlice"
import suggestionsSlice from "./suggestionsSlice";

const myYoutubeStore=configureStore({
    reducer:{
        hamburgerMenu: hamburgerMenuReducer,
         suggestion:suggestionsSlice,
    }
})

export default myYoutubeStore;