import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features/layout";
import HomeView from "../features/views/HomeView";
import DirectoryView from "../features/views/DirectoryView";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomeView/>
            },
            {
                path: '/membership-directory',
                element: <DirectoryView/>
            }
        ]
    }
])

export default router;