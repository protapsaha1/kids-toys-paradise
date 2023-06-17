import useClasses from "../../../CustomHook/useClasses";
import Courses from "./Courses";

const OurCourses = () => {
    const { classes } = useClasses();

    console.log(classes)

    return (
        <div className="grid grid-cols-4 gap-4 mx-auto py-36">
            {
                classes.map(cl => <Courses
                    key={cl._id}
                    classes={cl}
                />)
            }
        </div>
    );
};

export default OurCourses;