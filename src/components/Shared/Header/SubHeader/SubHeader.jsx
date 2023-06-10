import useHookContext from "../../../CustomHook/useHookContext";

const SubHeader = () => {
    const { user, logOut } = useHookContext();
    const handleUserLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="bg-sky-100 h-24 flex justify-between items-center">
            <h1 className=" text-5xl text-rose-600 font-serif font-bold ps-10">Hi! {user?.displayName} Welcome</h1>
            <button onClick={handleUserLogOut} className="text-3xl font-bold font-serif text-rose-700 mr-10 bg-yellow-300 px-6 py-5 rounded-[80px] hover:bg-yellow-200">
                LogOut
            </button>
        </div>
    );
};

export default SubHeader;