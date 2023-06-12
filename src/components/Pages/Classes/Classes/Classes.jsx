// import { useQuery } from "@tanstack/react-query";
// import useAxiosHook from "../../../CustomHook/useAxiosHook";
import useClasses from "../../../CustomHook/useClasses";
import ClassesCard from "../ClassesCard/ClassesCard";
// import useHookContext from "../../../CustomHook/useHookContext";

const Classes = () => {
    const { classes } = useClasses();
    // const { loading } = useHookContext();
    // const { axiosProtect } = useAxiosHook();
    // const { data: classes = [] } = useQuery({
    //     queryKey: ['classes'],
    //     queryFn: async () => {
    //         const res = axiosProtect.get('/classes')
    //         return res.data;
    //     }
    // });
    console.log(classes)
    const approvedClasses = classes.filter(approvedClass => approvedClass.status === "approved");
    return (
        <div className="grid grid-cols-4 gap-4 mx-auto w-[1650px] my-20">
            {
                approvedClasses.map(eachClass => <ClassesCard
                    key={eachClass._id}
                    eachClass={eachClass}
                />)
            }
        </div>
    );
};

export default Classes;