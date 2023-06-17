import useHookContext from "../../../CustomHook/useHookContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { googleLogin } = useHookContext();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loginUser = result.user;
                const user = { name: loginUser?.displayName, email: loginUser?.email, image: loginUser?.photoURL };
                fetch('https://emagraphy-server-protapsaha1.vercel.app/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Login Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    };


    return (
        <>
            <button onClick={handleGoogleLogin} className="flex items-center text-3xl font-serif font-bold text-center my-16 mx-auto">
                <span className="text-6xl text-red-600">G</span>
                <span className="text-5xl text-green-600">o</span>
                <span className="text-6xl text-yellow-500">o</span>
                <span className="text-5xl text-sky-600">g</span>
                <span className="text-6xl text-red-600">l</span>
                <span className="text-5xl text-green-600">e</span>
            </button>
        </>
    );
};

export default SocialLogin;