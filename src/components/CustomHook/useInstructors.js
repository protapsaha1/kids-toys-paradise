import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "./useAxiosHook";
import useHookContext from "./useHookContext";

const useInstructors = () => {
    const { user } = useHookContext();
    const { axiosProtect } = useAxiosHook();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosProtect.get(`/users/instructor/${user?.email}`)
            return res.data.instructor;
        }
    })
    return { isInstructor, isInstructorLoading };
};

export default useInstructors;