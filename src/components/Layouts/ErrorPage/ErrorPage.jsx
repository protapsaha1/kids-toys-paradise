import { Outlet } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-white w-full h-full">
            <Outlet />
        </div>
    );
};

export default ErrorPage;