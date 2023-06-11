import useClasses from "../../CustomHook/useClasses";
import ClassesCard from "../../Module/ClassesCard/ClassesCard";

const Classes = () => {
    const { classes } = useClasses();
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