import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../CustomHook/useAdmin";
import useHookContext from "../../CustomHook/useHookContext";
import Spinner from "../../Module/Spinner/Spinner";

const AdminPrivateRoute = ({ children }) => {
    const { user, loading } = useHookContext();
    const { isAdmin, isAdminLoading } = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner />
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminPrivateRoute;