import { createSlice } from "@reduxjs/toolkit";

 const videoInfoSlice =createSlice({
    name :"videoInfo",
    initialState :{
        info:null,
    },
    reducers:{
        addInfo:(state,action)=>{
          state.info=action.payload;
        },
        
    }
 })
 export const {addInfo}=videoInfoSlice.actions;
 export default videoInfoSlice.reducer;