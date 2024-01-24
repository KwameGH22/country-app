import React from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
import { useContext } from 'react';
import {AppContextCountry } from '../context/AppContextProvider';
import SearchAndFilter from './SearchAndFilter';
import Countries from './Countries';


const Header = () => {
    const {darkTheme, handleTheming} = useContext(AppContextCountry);

    


  return (
    <div className='  dark:bg-[#202C36] w-full min-h-screen'>
        <header  className='flex  font-Nunito text-[#111517] bg-[#FFFFFF] dark:bg-[#2B3844] dark:text-[#FFFFFF] w-full justify-between py-6 px-10 shadow-lg'>
        <div> 
            <h1 className='text-2xl mobile:text-lg font-extrabold ml-8'>Where in the world</h1>
        </div>
        <div className='flex text-center items-center gap-2 mr-8'> 
            {darkTheme? <IoMoonOutline className=' mobile:h-5 mobile-w-5 cursor-pointer h-6 w-6' onClick={()=>handleTheming()}/> : 
            <BsSun className=' cursor-pointer h-6 w-6' onClick={()=> handleTheming()}/>}
            <span className='font-semibold text-2xl mobile:text-base text'>{darkTheme? 'Light Mode': 'Dark Mode'}</span>
        </div>
        </header>
        <SearchAndFilter/>
        <Countries/>
        
        

  </div>
  )
}

export default Header
