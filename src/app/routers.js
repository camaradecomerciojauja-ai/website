import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features/layout";
import HomeView from "../features/views/HomeView";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomeView/>
            }
        ]
    }
])

export default router;