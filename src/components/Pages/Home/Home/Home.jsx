import useTitle from "../../../CustomHook/useTitle";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    useTitle('Home');
    return (
        <div className="bg-white h-full">
            <Banner />
            <PopularClasses />
            <PopularInstructors />

        </div>
    );
};

export default Home;