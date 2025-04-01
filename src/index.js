import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LayoutPage from "./pages/LayoutPage";
import HomePage from "./pages/HomePage";

import './assets/css/global.css'
import './assets/css/system.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPage/>,
        children: [
            {
                path: '',
                element: <HomePage/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <RouterProvider router={router} />
)