import { createSlice } from "@reduxjs/toolkit";

 const hamburgerMenuSlice =createSlice({
    name :"hamburgerMenu",
    initialState :{
        isOpenMenu:false,
    },
    reducers:{
        openMenu:(state)=>{
          state.isOpenMenu=true;
        },
        closeMenu:(state)=>{
            state.isOpenMenu=false;
        }
    }
 })
 export const {openMenu,closeMenu}=hamburgerMenuSlice.actions;
 export default hamburgerMenuSlice.reducer;