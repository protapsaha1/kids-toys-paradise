import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main/Main";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Authentication/Login/Login";
import SignUp from "../components/Pages/Authentication/SignUp/SignUp";
import OopsErrorPage from "../components/Pages/OopsError/OopsErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // Authentication routes
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <SignUp />
            },
            // Error page
            {
                path: '*',
                element: <OopsErrorPage />
            }
        ]

    }
]);

export default router;