import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import "./index.css";
import {loader as homeLoader} from './pages/Home'
import CountryProfile from "./pages/CountryProfile";
import {loader as countryProfileLoader} from './pages/CountryProfile'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      
      // errorElement={<ErrorPage />}
    >
      <Route
        index
        element={<Home/>}
        loader= {homeLoader}
        // errorElement={<ErrorPage />}
      />
      <Route path=":country" element={<CountryProfile />} loader={countryProfileLoader}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
