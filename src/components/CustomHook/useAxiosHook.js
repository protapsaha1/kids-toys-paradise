import { useNavigate } from "react-router-dom";
import useHookContext from "./useHookContext";
import axios from "axios";
import { useEffect } from "react";

const useAxiosHook = () => {
    const { logOut } = useHookContext();
    const navigate = useNavigate();

    const axiosProtect = axios.create({
        baseURL: 'https://emagraphy-server-protapsaha1.vercel.app',
    });


    useEffect(() => {
        axiosProtect.interceptors.request.use((config) => {
            const token = localStorage.getItem('emagraphy-access')
            if (token) {
                config.headers.Authorization = `bearer ${token}`;
            }
            return config;
        })
        // const token = localStorage.getItem('emagraphy-access');
        // if (token) {
        //     axiosProtect.defaults.headers.common['Authorization'] = `bearer ${token}`;
        // }

        axiosProtect.interceptors.response.use(
            response => response,
            async (error) => {
                if (error.response && error.response.status === 401 || error.response && error.response.status === 403) {
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