import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main/Main";
import Home from "../components/Pages/Home/Home/Home";
import Login from "../components/Pages/Authentication/Login/Login";
import SignUp from "../components/Pages/Authentication/SignUp/SignUp";
import OopsErrorPage from "../components/Pages/OopsError/OopsErrorPage";
import Instructors from "../components/Pages/Instructors/Instructors";
import Classes from "../components/Pages/Classes/Classes";
import Dashboard from "../components/Layouts/Dashboard/Dashboard";
import StudentHome from "../components/Pages/Dashboard/Student/Home/StudentHome";
import MyClasses from "../components/Pages/Dashboard/Student/MyClasses/MyClasses";
import EnrolledClasses from "../components/Pages/Dashboard/Student/EnrolledClasses/EnrolledClasses";
import InstructorsHome from "../components/Pages/Dashboard/Instructors/InstructorsHome/InstructorsHome";
import AddClasses from "../components/Pages/Dashboard/Instructors/AddClasses/AddClasses";
import EnrolledStudents from "../components/Pages/Dashboard/Instructors/EnrolledStudents/EnrolledStudents";
import AdminHome from "../components/Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageClasses from "../components/Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../components/Pages/Dashboard/Admin/ManageUsers/ManageUsers";

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
            },
            // instructors
            {
                path: 'instructors',
                element: <Instructors />
            },
            // classes
            {
                path: 'classes',
                element: <Classes />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            // Student route
            {
                path: 'student-home',
                element: <StudentHome />
            },
            {
                path: 'my-classes',
                element: <MyClasses />
            },
            {
                path: 'enrolled-classes',
                element: <EnrolledClasses />
            },
            // Instructors route
            {
                path: 'instructors-home',
                element: <InstructorsHome />
            },
            {
                path: 'add-classes',
                element: <AddClasses />
            },
            {
                path: 'enrolled-students',
                element: <EnrolledStudents />
            },
            // Admin route
            {
                path: 'admin-home',
                element: <AdminHome />
            },
            {
                path: 'manage-classes',
                element: <ManageClasses />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            }
        ]
    }
]);

export default router;