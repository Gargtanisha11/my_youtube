import React from 'react'


import UpperButtons from './UpperButtons';
import { Outlet } from 'react-router-dom';
const MainContainer = () => {
  
  return (
    <div className='mx-5  w-[88%]'>
      <UpperButtons/>
      <Outlet/>
    </div>
  )
}

export default MainContainer;
