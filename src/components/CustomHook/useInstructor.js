import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";

const useInstructor = () => {
    const { axiosProtect } = useAxiosHook();
    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructor'],
        queryFn: async () => {
            const res = await axiosProtect.get('http://localhost:5000/instructors')
            return res.data;
        }
    })
    return { instructors, loading, refetch }
};

export default useInstructor;