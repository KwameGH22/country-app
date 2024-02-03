import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import "./index.css";
import CountryProfile from "./pages/CountryProfile";
import { ContextProvider } from "./context/Context";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}

      // errorElement={<ErrorPage />}
    >
      <Route
        index
        element={<Home />}
        // loader= {homeLoader}
        // errorElement={<ErrorPage />}
      />

      <Route
        path="/:countryName"
        element={<CountryProfile />}
        // loader= {homeLoader}
        // errorElement={<ErrorPage />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CountryAppContext>
//       <BrowserRouter>
//         <Routes>
//           <Route  path="/" Component={RootLayout}>
//             <Route  index Component={Home} />
//             <Route  path="/countryprofile/:country" Component={CountryProfile} />
//           </Route>

//         </Routes>
//       </BrowserRouter>
//     </CountryAppContext>

//   </React.StrictMode>
// );
