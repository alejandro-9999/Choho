import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from './components/login';

import { TokenProvider } from './components/TokenContext';
import TerceroList from './components/TerceroList';
import Main from './components/main';


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hola test</div>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/terceros",
        element: <TerceroList/>,
    },
    {
        path: "/main",
        element: <Main/>,
    },
]);




ReactDOM.render(
    <React.StrictMode>
        <TokenProvider>
            <RouterProvider router={router} />
        </TokenProvider>
    </React.StrictMode>,
    document.getElementById('example')
);
