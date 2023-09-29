import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice=createSlice({
    name:"suggestion",
    initialState:{
      
    },
    reducers:{
        cacheResult:(state,action)=>{
            state =Object.assign(state,action.payload);
        },
    }
})
export const {cacheResult}=suggestionSlice.actions;
export default suggestionSlice.reducer;


