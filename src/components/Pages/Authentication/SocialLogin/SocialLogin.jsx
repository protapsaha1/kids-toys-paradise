import Swal from "sweetalert2";
import useHookContext from "../../../CustomHook/useHookContext";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useHookContext();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathName || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                const user = { name: result.user?.displayName, email: result.user?.email, image: result.user?.photoURL }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Login Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true })
                        }


                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
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