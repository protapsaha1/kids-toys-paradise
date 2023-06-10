import { Outlet, useLocation } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const LoginSignUp = location.pathname.includes('/login') || location.pathname.includes('/registration');
    const error = location.pathname.includes('/*');
    return (
        <div className=" bg-white">
            {error || LoginSignUp || <Header />}
            <Outlet />
            {error || LoginSignUp || <Footer />}
        </div>
    );
};

export default Main;