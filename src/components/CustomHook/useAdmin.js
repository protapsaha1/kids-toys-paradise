import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";
import useHookContext from "./useHookContext";

const useAdmin = () => {
    const { user } = useHookContext();
    const { axiosProtect } = useAxiosHook();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosProtect.get(`/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })
    return { isAdmin, isAdminLoading };
};

export default useAdmin;