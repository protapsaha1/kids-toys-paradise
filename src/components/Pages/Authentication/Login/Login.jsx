import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useHookContext from "../../../CustomHook/useHookContext";
import Swal from "sweetalert2";


const Login = () => {
    const { UserSignIn } = useHookContext();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    // TODO GET INPUT VALUE

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        UserSignIn()
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className=' bg-green-700 py-[100px]'>
            <div className='w-[700px] h-[1000px] bg-white mx-auto py-32 px-12'>
                <h1 className="text-6xl text-slate-900 font-serif font-bold text-center">Login Now !</h1>
                <form>
                    <div className='mb-3 mt-20'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Email Address</span>
                        </label>
                        <br />
                        <input type="email" className='h-[68px] w-[600px] text-2xl text-black bg-slate-50 ps-3 border-b-red-500' placeholder="Enter Your Email" name="email" id="" />
                    </div>
                    <div>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Password</span>
                        </label>
                        <br />
                        <label className="flex items-center">
                            <input type={show ? "text" : "password"} className='h-[68px] w-[520px] text-2xl text-black bg-slate-50 ps-3' placeholder="Enter Your Password" name="email" id="" />
                            <span className="bg-slate-500 h-[68px] px-4 py-3 w-20" onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash className="w-12 h-12 text-slate-900" /> : <FaEye className="w-12 h-12 text-slate-900" />
                                }
                            </span>
                        </label>
                    </div>
                    <input className="w-[600px] h-[70px] bg-sky-500 rounded-lg text-3xl text-white font-bold font-serif mt-20" type="submit" value="Login" />
                </form>
                <div>
                    <h3 className="text-xl font-serif uppercase font-semibold text-green-400 p-5 text-center">New in emagraphy ? <Link className="hover:text-rose-500" to="/registration">Create to account </Link> to make emagraphy member</h3>
                    <hr className="h-1 bg-slate-200 mt-24" />
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;