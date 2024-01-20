import React from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";

const Header = () => {
  return (
    <div className='w-full min-h-screen dark:bg-[#202C36]'>
    <header className='flex justify-around w-full bg-[#FFFFFF] font-Nunito text-[#111517] py-6 shadow-lg dark:bg-[#2B3844] dark:text-[#FFFFFF]'>
      <div> 
        <h1 className='text-2xl mobile:text-lg font-extrabold'>Where in the world</h1>
      </div>
      <div className='flex text-center items-center gap-2'> 
        {darkTheme? <IoMoonOutline className=' mobile:h-5 mobile-w-5 cursor-pointer h-6 w-6' onClick={()=>setDarkTheme(!darkTheme)}/> : 
        <BsSun className=' cursor-pointer h-6 w-6' onClick={()=> setDarkTheme(!darkTheme)}/>}
        <span className='font-semibold text-2xl mobile:text-base text'>{darkTheme? 'Light Mode': 'Dark Mode'}</span>
      </div>
    </header>

  </div>
  )
}

export default Header
