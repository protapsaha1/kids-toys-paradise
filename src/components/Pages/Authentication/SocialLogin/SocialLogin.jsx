import useHookContext from "../../../CustomHook/useHookContext";

const SocialLogin = () => {
    const { googleLogin } = useHookContext();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
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