import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

export const router = createBrowserRouter(
    [
       { path:'/',
         element: <RootLayout/>,
         children: [
            {path: '/',
             element: <Home/>,
             index: true
            },
            {path: ':country',
             element: <CountrySpecifics/>,
             index: true
            },

         ]
    
    
        }

    ]

)

export default router
