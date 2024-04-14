import React from "react";
import { useAppContext } from "../useAppContext";
import SearchField from "../components/SearchField";
import FilterField from "../components/FilterField";
import Card from "../components/Card";

const Home = () => {
  const { countries } = useAppContext();

  return (
    <div className="home w-full h-full min-h-screen text-[#111517] bg-[#FFFFFF]  dark:bg-[#2B3844] dark:text-[#FFFFFF]">
      <div className="flex font-Nunito mobile:flex-col mobile:items-start mt-0 items-center justify-between px-10 ">
        <SearchField />
        <FilterField />
      </div>
      <Card />
    </div>
  );
};

export default Home;
