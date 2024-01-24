import './App.css';
import AppContextProvider from './context/AppContextProvider';
import {Routes, Route} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import CountrySpecifics from './pages/CountrySpecifics';
import Home from './pages/Home';





function App() {
  
  async function homeLoader() {
    return await fetchAllCountries();
  }

  const countrySpecificsloader = async ({ params, req }) => {
    const countries = await fetchAllCountries();
    const country = await countries.find(
      (country) => country.name.common === params.country
    );
    return { countries, country };
  };




  return (
    <AppContextProvider>
      <Routes>
        <Route path='/'
              element= {<RootLayout/>}>
            <Route index 
                  loader={homeLoader}>
                  element={<Home/>}
                  
            </Route>
            <Route path=':country' 
                  loader={countrySpecificsloader}>
                  element={<CountrySpecifics/>}
                  
            </Route>
        </Route> 
      </Routes>
    </AppContextProvider>
  )
}

export default App
