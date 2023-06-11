import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
    return (
        <>
            <NavLink to={to} className={({ isActive }) =>
                isActive
                    ?
                    "border-b-4 border-b-green-800"
                    :
                    ""
            }>
                {children}
            </NavLink>
        </>
    );
};

export default ActiveLink;