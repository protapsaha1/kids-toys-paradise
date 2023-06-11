import { useNavigate } from "react-router-dom";
import useHookContext from "./useHookContext";
import axios from "axios";
import { useEffect } from "react";

const useAxiosHook = () => {
    const { logOut } = useHookContext();
    const navigate = useNavigate();

    const axiosProtect = axios.create({
        baseURL: 'http://localhost:5000',
    });


    useEffect(() => {
        axiosProtect.interceptors.request.use((config) => {
            const token = localStorage.getItem('emagraphy-access')
            if (token) {
                config.headers.Authorization = `bearer ${token}`;
            }
            return config;
        })

        axiosProtect.interceptors.response.use(
            res => res,
            async (error) => {
                if (error.res && error.res.status === 401 || error.res && error.res.status === 403) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        )
    }, [axiosProtect, navigate, logOut])
    return { axiosProtect };
};

export default useAxiosHook;