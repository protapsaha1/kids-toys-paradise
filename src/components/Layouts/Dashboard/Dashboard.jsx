import { FaBars, FaChalkboardTeacher, FaHome, FaMoneyBillAlt, FaSchool, FaUsers } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../CustomHook/useAdmin";
import useInstructors from "../../CustomHook/useInstructors";
import DashActive from "../../Module/DashActive/DashActive";

const Dashboard = () => {
    const { isAdmin } = useAdmin();
    const { isInstructor } = useInstructors();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center bg-white">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="p-4 w-[500px] h-full text-base-content bg-yellow-300">
                    {

                        isAdmin
                            ?
                            <h1 className="text-6xl text-green-700 font-serif font-bold mt-10 mb-10 text-center">EmaGraphy
                                <br />
                                <span className="text-4xl">Admin</span>

                            </h1>
                            :
                            isInstructor
                                ?
                                <h1 className="text-6xl text-green-700 font-serif font-bold mt-10 mb-10 text-center">EmaGraphy
                                    <br />
                                    <span className="text-4xl">Instructor</span>
                                </h1>
                                :
                                <h1 className="text-6xl text-green-700 font-serif font-bold mt-10 mb-10 text-center">EmaGraphy
                                    <br />
                                    <span className="text-4xl">Students</span>
                                </h1>

                    }


                    {
                        isAdmin
                            ?
                            <>
                                <li className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><DashActive to="/dashboard/manage-classes" ><FaSchool className="w-12 h-12 mr-3" />Manage Classes</DashActive></li>
                                <li className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><DashActive to="/dashboard/manage-users"  ><FaUsers className="w-12 h-12 mr-3" />Manage Users</DashActive></li>
                            </>
                            :
                            isInstructor
                                ?
                                <>
                                    <li className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><DashActive to="/dashboard/add-classes"  ><FaBars className="w-12 h-12 mr-3" />Add Class</DashActive></li>
                                    <li className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><DashActive to="/dashboard/my-classes" ><FaSchool className="w-12 h-12 mr-3" />My Classes</DashActive></li>
                                </>
                                :
                                <>
                                    <li className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><DashActive to="/dashboard/booking-classes" ><FaSchool className="w-12 h-12 mr-3" />My Booking Classes</DashActive></li>
                                    <li className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><DashActive to="/dashboard/enrolled-classes" ><FaMoneyBillAlt className="w-12 h-12 mr-3" />My Enrolled Classes</DashActive></li>
                                </>

                    }
                    <hr className="my-10 bg-black h-1 shadow-lg" />
                    <li><NavLink to="/" className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><FaHome className="w-12 h-12 mr-3" />Home</NavLink></li>
                    <li><NavLink to="/classes" className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><FaSchool className="w-12 h-12 mr-3" />Classes</NavLink></li>
                    <li><NavLink to="/instructors" className="flex items-center text-3xl font-bold font-serif text-slate-900 py-3 px-4 hover:bg-green-500 hover:text-white hover:px-4 hover:py-3 hover:shadow-lg"><FaChalkboardTeacher className="w-12 h-12 mr-3" />Instructors</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;