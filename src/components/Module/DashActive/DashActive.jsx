import { NavLink } from "react-router-dom";

const DashActive = ({ to, children }) => {
    return (
        <div>
            <NavLink to={to} className={({ isActive }) =>
                isActive
                    ?
                    "flex items-center text-3xl font-bold font-serif py-3 px-4 bg-green-500 text-white shadow-lg"
                    :
                    ""
            }>
                {children}
            </NavLink>
        </div>
    );
};

export default DashActive;