import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";

const useUsers = () => {
    const { axiosProtect } = useAxiosHook();
    const { data: users = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosProtect.get('/users')
            return res.data;
        }
    })
    return { users, loading, refetch }
};

export default useUsers;