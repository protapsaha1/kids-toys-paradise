import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";
import useHookContext from "./useHookContext";

const useBookedClasses = () => {
    const { axiosProtect } = useAxiosHook();
    const { user, loading } = useHookContext();
    const { refetch, data: bookedClass = [] } = useQuery({
        queryKey: ['bookedClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosProtect(`/bookedClass?email=${user?.email}`)
            return res.data;
        }
    })
    return { refetch, bookedClass }
};

export default useBookedClasses;