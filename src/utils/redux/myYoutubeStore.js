import { configureStore } from "@reduxjs/toolkit"
import hamburgerMenuReducer from  "./hamburgerSlice"
import videoInfoReducer from "./videoInfo";
const myYoutubeStore=configureStore({
    reducer:{
        hamburgerMenu: hamburgerMenuReducer,
        videoInfo: videoInfoReducer,
    }
})

export default myYoutubeStore;