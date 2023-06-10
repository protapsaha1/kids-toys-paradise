import { Navigate, useLocation } from "react-router-dom";
import useHookContext from "../../CustomHook/useHookContext";
import useInstructors from "../../CustomHook/useInstructors";
import Spinner from "../../Module/Spinner/Spinner";

const InstructorPrivateRoute = ({ children }) => {
    const { user, loading } = useHookContext();
    const { isInstructor, isInstructorLoading } = useInstructors();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <Spinner />
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstructorPrivateRoute;