import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../features/layout";
import HomePage from "../features/pages/HomePage";
import DirectoryView from "../features/views/DirectoryView";
import AboutPage from "../features/pages/AboutPage";
import TrainingPage from "../features/pages/TrainingPage";
import InterviewsPage from "../features/pages/InterviewsPage";
import ServicesPage from "../features/pages/ServicesPage";
import JoinPage from "../features/pages/JoinPage";
import NewslatterPage from "../features/pages/NewslatterPage";
import ProtectedRoute from "../routes/protected.route";
import LoginScreen from "../features/admin/auth/login";
import AdminLayout from "../features/admin/layout";
import DashboardLayout from "../features/admin/dashboard/layout";
import Partners from "../features/admin/dashboard/partners";

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
                path: '/services',
                element: <ServicesPage/>,
            },
            {
                path: '/interviews',
                element: <InterviewsPage/>
            },
            {
                path: '/training',
                element: <TrainingPage/>
            },
            {
                path: '/newsletter',
                element: <NewslatterPage/>
            },
            {
                path: '/newsletter/:slug'
            },
            {
                path: '/about',
                element: <AboutPage/>,
            },
            {
                path: '/join',
                element: <JoinPage/>,
            },
            {
                path: '/membership-directory',
                element: <DirectoryView/>
            }
        ]
    },
    {
        path: '/wp',
        element: <AdminLayout/>,
        children: [
            {
                path: '/wp/admin',
                element: <ProtectedRoute/>,
                children: [
                    {
                        path: '/wp/admin',
                        element: <DashboardLayout/>,
                        children: [
                            {
                                index: true,
                                element: <h1>Home</h1>
                            },
                            {
                                path: '/wp/admin/partners',
                                element: <Partners/>
                            },
                            {
                                path: '/wp/admin/interested',
                                element: <h1>interested</h1>
                            },
                            {
                                path: '/wp/admin/users',
                                element: <h1>users</h1>
                            },
                            {
                                path: '/wp/admin/settings',
                                element: <h1>settings</h1>
                            }
                        ]
                    }
                ]
            },
            {
                path: '/wp/login',
                element: <LoginScreen/>
            }
        ]
    }
])

export default router;