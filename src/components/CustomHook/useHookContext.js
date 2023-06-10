import { useContext } from "react";
import { UsersAuthentication } from "../UserContext/UserContext";

const useHookContext = () => {
    const userContext = useContext(UsersAuthentication);
    return userContext;
};

export default useHookContext;