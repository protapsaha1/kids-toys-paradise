import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useHookContext from "../../../CustomHook/useHookContext";
// import { useForm } from "react-hook-form";
const user_image_upload_api = import.meta.env.VITE_IMAGE_UPLOAD
const SignUp = () => {
    const { newCreateUsers, userProfileUpdate } = useHookContext()
    const [show, setShow] = useState(false);
    // TODO GET INPUT VALUE
    const image_hosing_url = `https://api.imgbb.com/1/upload?key=${user_image_upload_api}`

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;
        const image = form.image.files[0];
        console.log(name, email, password, conPassword, image)


        const users = { name: name, email: email }
        console.log(users)


        newCreateUsers(email, password)

            .then(result => {
                console.log(result.user);
                userProfileUpdate(name, image)
                    .then(result => {
                        console.log(result.user)
                        const formData = new FormData();
                        formData.append('image', image)
                        fetch(image_hosing_url, {
                            method: "POST",
                            body: formData
                        })
                            .then(res => res.json())
                            .then(imgRes => {
                                console.log(imgRes)
                                if (imgRes.success) {
                                    const img = imgRes.data.display_url;
                                    const { name, email } = users;
                                    // TODO
                                    const user = { name, email, image: img }
                                }
                            })
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
                            })
                    })
                    .catch(error => {
                        console.log(error.message)
                    })

            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div className=' bg-green-700 py-[100px]'>
            <div className='w-[700px] h-[1400px] bg-white mx-auto py-32 px-12'>
                <h1 className="text-6xl text-slate-900 font-serif font-bold text-center">Register Now !</h1>
                <form onSubmit={handleSignUp}>
                    <div className='mb-3 mt-20'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Name</span>
                        </label>
                        <br />
                        <input type="text" className='h-[68px] w-[600px] text-2xl text-black bg-slate-50 ps-3 border-b-red-500 mt-2' placeholder="Your Name" name="name" id="name" required />
                    </div>
                    <div className='mb-3 mt-5'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Email Address</span>
                        </label>
                        <br />
                        <input type="email" className='h-[68px] w-[600px] text-2xl text-black bg-slate-50 ps-3 border-b-red-500 mt-2' placeholder="Enter your Email" name="email" id="email" required />
                    </div>
                    <div className=''>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Password</span>
                        </label>
                        <br />
                        <label className="flex items-center">
                            <input type={show ? "text" : "password"} className='h-[68px] w-[520px] text-2xl text-black bg-slate-50 ps-3  mt-2' placeholder="Enter Your Password" name="password" id="password" required />
                            <span className="bg-slate-500 h-[68px] px-4 py-3 w-20" onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash className="w-12 h-12 text-slate-900" /> : <FaEye className="w-12 h-12 text-slate-900" />
                                }
                            </span>
                        </label>
                    </div>
                    <div className='mb-3 mt-10'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400 mb-1'>Confirm Password</span>
                        </label>
                        <br />
                        <label className="flex items-center">
                            <input type={show ? "text" : "password"} className='h-[68px] w-[520px] text-2xl text-black bg-slate-50 ps-3 mt-2' placeholder="Confirm Your Password" name="conPassword" id="conPassword" required />
                            <span className="bg-slate-500 h-[68px] px-4 py-3 w-20" onClick={() => setShow(!show)}>
                                {
                                    show ? <FaEyeSlash className="w-12 h-12 text-slate-900" /> : <FaEye className="w-12 h-12 text-slate-900" />
                                }
                            </span>
                        </label>
                    </div>
                    <div className='mb-3 mt-5'>
                        <label>
                            <span className='text-2xl font-serif font-bold text-sky-400'>Photo Url</span>
                        </label>
                        <br />
                        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs text-2xl mt-2" name="image" required />
                    </div>
                    <input className="w-[600px] h-[70px] bg-sky-500 rounded-lg text-3xl text-white font-bold font-serif mt-20" type="submit" value="Sign Up" />
                </form>
                <div>
                    <h3 className="text-xl font-serif uppercase font-semibold text-green-400 p-5 text-center">Have account in emagraphy ? <Link className="hover:text-rose-500" to="/login">Login</Link></h3>
                    <hr className="h-1 bg-slate-200 mt-24" />
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;