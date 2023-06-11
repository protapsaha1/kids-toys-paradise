import { Navigate, useLocation } from "react-router-dom";
import useHookContext from "../../CustomHook/useHookContext";
import Spinner from "../../Module/Spinner/Spinner";

const UserPrivateRoute = ({ children }) => {
    const { user, loading } = useHookContext();
    const location = useLocation();
    
    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate >
};

export default UserPrivateRoute;