import { Outlet, useLocation } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const LoginSignUp = location.pathname.includes('/login') || location.pathname.includes('/registration');

    return (
        <div className=" bg-white">
            {LoginSignUp || <Header />}
            <Outlet />
            {LoginSignUp || <Footer />}
        </div>
    );
};

export default Main;