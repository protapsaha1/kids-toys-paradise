import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main/Main";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Authentication/Login/Login";
import SignUp from "../components/Pages/Authentication/SignUp/SignUp";
import OopsErrorPage from "../components/Pages/OopsError/OopsErrorPage";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import StudentHome from "../components/Pages/Dashboard/Student/Home/StudentHome";
import MyClasses from "../components/Pages/Dashboard/Student/MyClasses/MyClasses";
import InstructorsHome from "../components/Pages/Dashboard/Instructors/InstructorsHome/InstructorsHome";
import AddClasses from "../components/Pages/Dashboard/Instructors/AddClasses/AddClasses";
import AdminHome from "../components/Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageClasses from "../components/Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../components/Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import UserPrivateRoute from "../components/PrivateRoute/UserRoute/UserPrivateRoute";
import ErrorPage from "../components/Layouts/ErrorPage/ErrorPage";
import Payment from "../components/Pages/Dashboard/Student/Payments/Payment/Payment";
import Instructors from "../components/Pages/Instructors/Instructors/Instructors";
import Classes from "../components/Pages/Classes/Classes/Classes";
import InstructorPrivateRoute from "../components/PrivateRoute/InstructorsRoute/InstructorPrivateRoute";
import AdminPrivateRoute from "../components/PrivateRoute/AdminRoute/AdminPrivateRoute";
import Feedback from "../components/Pages/Dashboard/Admin/Feedback/Feedback";
import EnrolledClasses from "../components/Pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import MyAddedClasses from "../components/Pages/Dashboard/Instructors/MyAddedClasses/MyAddedClasses";

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

            // instructors
            {
                path: 'instructors',
                element: <UserPrivateRoute><Instructors /></UserPrivateRoute>
            },
            // classes
            {
                path: 'classes',
                element: <UserPrivateRoute><Classes /></UserPrivateRoute>
            }
        ]
    },
    {
        path: '/',
        element: <ErrorPage />,
        children: [
            // Error page
            {
                path: '*',
                element: <OopsErrorPage />
            },
        ]
    },
    {
        path: 'dashboard',
        element: <UserPrivateRoute><Dashboard /></UserPrivateRoute>,
        children: [
            // Student route
            {
                path: 'student-home',
                element: <StudentHome />
            },
            {
                path: 'booking-classes',
                element: <MyClasses />
            },
            {
                path: 'enrolled-classes',
                element: <EnrolledClasses />
            },
            {
                path: 'payment',
                element: <Payment />
            },
            // Instructors route
            {
                path: 'instructors-home',
                element: <InstructorPrivateRoute><InstructorsHome /></InstructorPrivateRoute>
            },
            {
                path: 'add-classes',
                element: <InstructorPrivateRoute><AddClasses /></InstructorPrivateRoute>
            },
            {
                path: 'my-classes',
                element: <InstructorPrivateRoute><MyAddedClasses /></InstructorPrivateRoute>
            },
            // Admin route
            {
                path: 'admin-home',
                element: <AdminPrivateRoute><AdminHome /></AdminPrivateRoute>
            },
            {
                path: 'manage-classes',
                element: <AdminPrivateRoute><ManageClasses /></AdminPrivateRoute>
            },
            {
                path: 'manage-users',
                element: <AdminPrivateRoute><ManageUsers /></AdminPrivateRoute>
            },
            {
                path: 'feedback',
                element: <AdminPrivateRoute><Feedback /></AdminPrivateRoute>
            }
        ]
    }
]);

export default router;