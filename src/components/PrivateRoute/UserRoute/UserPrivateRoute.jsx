import useHookContext from "../../CustomHook/useHookContext";
import Spinner from "../../Module/Spinner/Spinner";

const UserPrivateRoute = ({ children }) => {
    const { user, loading } = useHookContext();
    if (loading) {
        return <Spinner />
    }

    if (user) {
        return children;
    }
    return (
       
    );
};

export default UserPrivateRoute;