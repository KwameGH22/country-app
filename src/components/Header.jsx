import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";
// import { useState, useEffect, useContext } from "react";
import { useAppContext } from "../useAppContext";

const Header = () => {
  const { handleDarkMode, darkMode } = useAppContext();
  console.log(darkMode);

  return (
    <header className="wrapper flex item-center gap-8  w-full  py-10 px-5 shadow-lg font-Nunito text-[#111517] bg-[#FFFFFF]  dark:bg-[#2B3844] dark:text-[#FFFFFF]">
      <div className="container flex justify-between max-w-[100%] shadow-lg">
        <h1 className="text-3xl mobile:text-lg font-semibold ml-8">
          Where in the world
        </h1>
        <div className="flex text-center items-center gap-2.5 mr-5">
          {darkMode ? (
            <IoMoonOutline
              className=" mobile:h-5 mobile-w-5 cursor-pointer h-6 w-6"
              onClick={handleDarkMode}
            />
          ) : (
            <BsSun
              className=" cursor-pointer h-6 w-6"
              onClick={handleDarkMode}
            />
          )}
          <h3 className="font-semibold text-2xl mobile:text-base text">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
