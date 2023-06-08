import { Link } from "react-router-dom";
import emaBird from '../../../../src/assets/image/emaBird.png';

const Header = () => {
    const navLinks = <>
        <li className="mx-2 text-rose-600 hover:text-rose-400 font-serif font-semibold text-3xl"><Link to="/">Home</Link></li>
        <li className="mx-2 text-rose-600 hover:text-rose-400 font-serif font-semibold text-3xl"><Link to="/instructors">Instructors</Link></li>
        <li className="mx-2 text-rose-600 hover:text-rose-400 font-serif font-semibold text-3xl"><Link to="/classes">Classes</Link></li>
        <li className="mx-2 text-rose-600 hover:text-rose-400 font-serif font-semibold text-3xl"><Link to="/dashboard">Dashboard</Link></li>
    </>
    return (
        <div className="navbar h-20 bg-slate-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
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
                <Link className="text-rose-600 hover:text-rose-400 font-serif font-semibold text-4xl" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;