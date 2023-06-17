import useTitle from "../../../CustomHook/useTitle";
import Banner from "../Banner/Banner";
import OurCourses from "../OurCourses/OurCourses";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    useTitle('Home');
    return (
        <div className="bg-white h-full">
            <div className="w-[1800px] h-full mx-auto py-10">
                <Banner />
            </div>
            <PopularClasses />
            <PopularInstructors />
            <div className="w-[1800px] mx-auto">
                <OurCourses />
            </div>
        </div>
    );
};

export default Home;