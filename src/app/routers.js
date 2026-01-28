import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features/layout";
import HomePage from "../features/pages/HomePage";
import DirectoryView from "../features/views/DirectoryView";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/services'
            },
            {
                path: '/interviews'
            },
            {
                path: '/training'
            },
            {
                path: '/about'
            },
            {
                path: '/register'
            },
            {
                path: '/membership-directory',
                element: <DirectoryView/>
            }
        ]
    }
])

export default router;