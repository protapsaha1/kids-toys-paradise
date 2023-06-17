import useInstructor from "../../../CustomHook/useInstructor";
import InstructorsCards from "../InstructorsCards/InstructorsCards";

const Instructors = () => {
    const { instructors } = useInstructor();
    console.log(instructors)
    return (
        <div className="grid grid-cols-4 gap-4 mx-auto w-[1650px] my-20">
            {instructors &&
                instructors.map(instructor => <InstructorsCards
                    key={instructor._id}
                    instructor={instructor}
                />)
            }
        </div>
    );
};

export default Instructors;