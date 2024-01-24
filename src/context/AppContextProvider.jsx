import React from 'react';
import { useState } from 'react';
import { createContext, useContext} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useParams,Navigate,redirect} from "react-router-dom";


export const AppContextCountry = createContext()

export const useAppContext = () => {
  return useContext(AppContextCountry)
}

export const AppContextProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const [countries, setCountries] = React.useState(() => [...data]);
    const [isLoading, setIsLoading] = useState([]);
    const [error, setError] = useState('');
    const [query, setQuery] = React.useState(() => ({ search: "", filter: "" }));
    
    

    const data = useLoaderData();
    
    useEffect(() => {
        // Initialize dark mode based on system preference
        const initialDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(initialDarkMode);
      }, []);

    
    useEffect(() => {
        // Manually apply Dark Mode
        if (darkMode) {
          document.documentElement.classList.add('dark');
          console.log('dark mode active');
        } else {
          document.documentElement.classList.remove('dark');
          console.log('light mode active');
        }
      }, [darkMode]);
    

    const handleTheming = () => {
        setDarkMode(!darkMode);
    }

    const fetchAllCountries = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get('https://restcountries.com/v3.1/all');
    
          if (!response) {
            return Error('Something went wrong'); // or return a placeholder, error message, or loading state
          }
          const data = response.data; // assign the response from the server to data
          console.log(data);
          
           
    
          setCountries(data);
          setIsLoading(false); // Set loading to false whether the request succeeds or fails
        } catch (error) {
          // handle error
          setError(error.message);
          console.error('Error fetching data:', error);
        }
      };
    
      useEffect(() => {
        fetchAllCountries();
      }, []);

    async function homeLoader() {
        return await fetchAllCountries();
      }

    

    const handleQuery = (e) => {
      const { name, value } = e.target;
      // console.log(name);
      setQuery({ ...query, [name]: value });
  
      if (name === "search") {
        setCountries((prev) => {
          return data.filter((country) =>
            country.name.common.toLowerCase().includes(value.trim().toLowerCase())
          );
        });
      }
      if (name === "filter") {
        setCountries(
          data.filter(
            (country) => country.region.toLowerCase() === value.toLowerCase()
          )
        );
      }
    };

    

  return (
    <AppContextCountry.Provider  value={{darkMode, handleTheming,
                                        countries, setCountries,
                                        isLoading, setIsLoading,
                                        error,setError,
                                        fetchAllCountries, handleTheming, homeLoader,
                                        query, setQuery,
                                        handleQuery, countrySpecificsloader }} >
      {children}
    </AppContextCountry.Provider>
  )
}

export default AppContextProvider
