import React from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { useState, useEffect } from 'react';





const Header = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Initialize dark mode based on system preference
    const initialDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(initialDarkMode);
  }, []);

  useEffect(() => {
    // Apply dark mode when darkMode state changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      console.log('dark mode active');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('light mode active');
    }
  }, [darkMode]);

  
  return (
    

    <div className='dark:bg-[#202C36] w-full min-h-screen'>
        <header  className='flex  font-Nunito text-[#111517] bg-[#FFFFFF] dark:bg-[#2B3844] dark:text-[#FFFFFF] w-full justify-between py-6 px-10 shadow-lg'>
          <div> 
              <h1 className='text-2xl mobile:text-lg font-semibold ml-8'>Where in the world</h1>
          </div>
          <div className='flex text-center items-center gap-2 mr-8'> 
              {darkMode? <IoMoonOutline className=' mobile:h-5 mobile-w-5 cursor-pointer h-6 w-6' onClick={()=>setDarkMode(!darkMode)}/> : 
              <BsSun className=' cursor-pointer h-6 w-6' onClick={()=> setDarkMode(!darkMode)}/>}
              <span className='font-semibold text-2xl mobile:text-base text'>{darkMode? 'Light Mode': 'Dark Mode'}</span>
          </div>
        </header>
    </div>
  )
}

export default Header
