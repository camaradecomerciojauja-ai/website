import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./app/routers";
import AppProviders from "./app/providers";

import './shared/css/global.css'

createRoot(document.getElementById('root')).render(

    <>
    
        <AppProviders>
        
            <RouterProvider router={router} />
        
        </AppProviders>

    </>

)