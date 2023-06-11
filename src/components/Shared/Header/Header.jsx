import { Link, useLocation } from "react-router-dom";
import emaBird from '../../../../src/assets/image/emaBird.png';
import useHookContext from "../../CustomHook/useHookContext";
import SubHeader from "./SubHeader/SubHeader";
import ActiveLink from "../../Module/ActiveLink/ActiveLink";

const Header = () => {
    const { user } = useHookContext();
    const location = useLocation();
    const subHeader = location.pathname.includes('/classes') || location.pathname.includes('/instructors');

    const navLinks = <>
        <li className="mx-3 text-rose-600 hover:text-rose-400 font-serif font-semibold text-3xl "><ActiveLink to="/">Home</ActiveLink></li>
        <li className="mx-3 text-rose-600 hover:text-rose-400 font-serif font-semibold text-3xl"><ActiveLink to="/instructors">Instructors</ActiveLink></li>
        <li className="mx-3 text-rose-600 hover:text-rose-400 font-serif font-semibold text-3xl"><ActiveLink to="/classes">Classes</ActiveLink></li>
        <li className="mx-3 text-rose-600 hover:text-rose-400 font-serif font-semibold text-3xl"><ActiveLink to="/dashboard">Dashboard</ActiveLink></li>
    </>
    return (
        <>
            <div className="navbar h-[100px] bg-slate-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label> */}
                        <ul tabIndex={0} className="menu-sm dropdown-content mt-3 p-2 shadow bg-slate-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div>

                        <Link className="btn btn-ghost text-3xl text-green-700 font-serif" to="/">Ema Graphy
                            <img className="w-10 h-10" src={emaBird} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end pr-20">
                    {user ?
                        <img className="w-[70px] h-[70px] rounded-[50%]" src={user?.photoURL} alt="" />
                        : <Link to="/login"><button className=" hover:text-rose-400  text-4xl font-bold font-serif text-rose-600 mr-10 bg-yellow-300 px-6 py-5 rounded-[80px] hover:bg-yellow-200">Login</button></Link>
                    }
                </div>
            </div>
            {subHeader || user && <SubHeader />}
        </>
    );
};

export default Header;