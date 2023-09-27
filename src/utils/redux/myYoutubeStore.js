import { configureStore } from "@reduxjs/toolkit"
import hamburgerMenuReducer from  "./hamburgerSlice"

const myYoutubeStore=configureStore({
    reducer:{
        hamburgerMenu: hamburgerMenuReducer,
       
    }
})

export default myYoutubeStore;