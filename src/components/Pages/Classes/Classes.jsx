import useClasses from "../../CustomHook/useClasses";
import ClassesCard from "../../Module/ClassesCard/ClassesCard";

const Classes = () => {
    const { classes } = useClasses();
    console.log(classes)
    return (
        <div className="grid grid-cols-3 gap-3 mx-auto w-[1000px]">
            {
                classes.map(eachClass => <ClassesCard
                    key={eachClass._id}
                    eachClass={eachClass}

                />)
            }
        </div>
    );
};

export default Classes;