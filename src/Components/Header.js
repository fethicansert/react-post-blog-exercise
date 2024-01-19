import React, { useContext } from 'react'
import sugurPng from '../images/suguruuuu.png'
import  useWindowSize  from '../Hooks/useWindowSizeHook.js'
import { FaLaptop, FaTabletAlt } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import DataContext from '../Context/DataContext';

function Header({title}) {
  const { width } = useContext(DataContext);
  let deviceIcon;
  if (width > 900) {
    deviceIcon = <FaLaptop className='header-device-icon'/>
  } else if (width > 500){
    deviceIcon = <FaTabletAlt className='header-device-icon'/>
  } else {
    deviceIcon = <IoMdPhonePortrait className='header-device-icon'/>
  }
  return (
    <header>
      <h1>{title}</h1>
      <img src={sugurPng} width={'80px'}></img>
      {deviceIcon}
    </header>
  )
}

export default Header
