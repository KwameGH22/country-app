import React, {  createContext, useState, useEffect } from "react";
import axios from "axios";

export const Context = createContext();
const { Provider } = Context;

export const ContextProvider = ({ children }) => {
  const [query, setQuery] = useState(() => ({ search: "", filter: "" })); //step1
  const [countries, setCountries] = useState(() => []); //step2
  const [loading, setLoading] = useState(""); //step 3
  const [error, setError] = useState(""); //step4
  const [allCountries, setAllCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      try {
        setLoading(true);
        const response = await axios("https://restcountries.com/v3.1/all");
        const data = response.data;
        // console.log(data);
        setAllCountries(data);
        setCountries(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      } //step6
    }; //step5
    getCountries();
  }, []);

  const handleQuery = (e) => {
    const { name, value } = e.target; //step 8
    setQuery((prev) => {
      return { ...prev, [name]: value }; //step9
    });
    if (name === "search") {
      const searchedCountries = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(value.trim().toLowerCase())
      );

      setCountries(searchedCountries);
    }
    if (name === "filter") {
      const filteredCountries = allCountries.filter(
        (country) => country.region.toLowerCase() === value.toLowerCase()
      );
      setCountries(filteredCountries);
    }
  }; //step7
  //   console.log(allCountries);
  //   console.log(countries);
  //   console.log(query);

  useEffect(() => {
    // Initialize dark mode based on system preference
    const initialDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(initialDarkMode);
  }, []);

  useEffect(() => {
    // Apply dark mode when darkMode state changes
    if (darkMode) {
      document.documentElement.classList.add("dark");
      console.log("dark mode active");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("light mode active");
    }
  }, [darkMode]);

  const handleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  //   // Function to activate darkMode
  // const darkModeActivator = () => {
  //     if (darkMode) {
  //         document.documentElement.classList.add('dark');
  //         console.log('dark mode active');
  //       } else {
  //         document.documentElement.classList.remove('dark');
  //         console.log('light mode active');
  //       }
  // }

  // const systemTheme = () => {
  //     const initialTheme =  window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     setDarkMode(initialTheme);
  // }
  return (
    <Provider
      value={{
        query,
        countries,
        loading,
        error,
        handleQuery,
        darkMode,
        handleDarkMode,
        allCountries,
      }}
    >
      {children}
    </Provider>
  );
};
