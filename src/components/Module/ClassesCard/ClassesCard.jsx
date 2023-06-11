import { useLocation, useNavigate } from "react-router-dom";
import useAdmin from "../../CustomHook/useAdmin";
import useClasses from "../../CustomHook/useClasses";
import useInstructors from "../../CustomHook/useInstructors";
import useHookContext from "../../CustomHook/useHookContext";
import Swal from "sweetalert2";

// import { BiSolidBookAdd } from "react-icons/bi";
const ClassesCard = ({ eachClass }) => {
    const navigate = useNavigate();
    const { user } = useHookContext();
    const location = useLocation();
    const { classes } = useClasses();
    const { isAdmin } = useAdmin();
    const { isInstructor } = useInstructors();
    const { _id, class_name, image, price } = eachClass;

    const bookedClassData = { classId: _id, name: class_name, price: price, image: image, email: user?.email };

    const handleBookingsClass = () => {
        if (user && user?.email) {
            fetch('http://localhost:5000/bookedClass', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(bookedClassData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Booked the Class Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to Booked Class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    };

    return (
        <div className={classes.length === 0 ? `w-[400px] h-[600px] rounded-lg bg-red-300 relative p-3` : `w-[400px] h-[600px] rounded-lg bg-slate-100 relative p-3`}>
            <img className="w-full h-[250px]" src={image} alt="" />
            <div className="pt-4 w-full">
                <h1 className="text-center text-3xl text-slate-950 font-serif font-bold uppercase">{class_name}</h1>
                <p className="text-end text-2xl mr-3 my-4 text-slate-950 font-serif font-bold uppercase">$ {price}</p>
                <button onClick={() => handleBookingsClass(eachClass)} className=" bg-gradient-to-r from-sky-200 to-blue-400 w-[240px] px-3 h-16 mt-20 mx-auto text-3xl font-serif font-bold text-slate-800 flex items-center " disabled={isAdmin && isInstructor} >Booking class</button>
            </div>
        </div>
    );
};

export default ClassesCard;