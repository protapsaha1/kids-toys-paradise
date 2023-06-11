import Swal from "sweetalert2";
import useHookContext from "../../../../CustomHook/useHookContext";
import useTitle from "../../../../CustomHook/useTitle";



const user_image_upload_api = import.meta.env.VITE_IMAGE_UPLOAD
const AddClasses = () => {
    useTitle("Add Classes")
    const { user } = useHookContext();
    const image_hosing_url = `https://api.imgbb.com/1/upload?key=${user_image_upload_api}`;

    const handleAddClasses = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const instructorName = form.InstructorName.value;
        const instructorEmail = form.email.value;
        const seats = parseFloat(form.seats.value);
        const price = parseFloat(form.price.value);
        const image = form.image.files[0];
        const classInfo = { class_name: name, instructor_name: instructorName, instructor_email: instructorEmail, seats: seats, price: price };
        const instructorInfo = { name: instructorName, email: instructorEmail };

        fetch('http://localhost:5000/instructors', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(instructorInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        const formData = new FormData();
        formData.append('image', image)
        fetch(image_hosing_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const img = imgRes.data.display_url;
                    const { class_name, instructor_name, instructor_email, seats, price } = classInfo;
                    // TODO
                    const classData = { class_name, instructor_name, instructor_email, seats, price, image: img, status: 'pending' }

                    fetch('http://localhost:5000/classes', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(classData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'New class added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }

                        })
                }
            });
    }





    return (
        <div className="p-16 bg-sky-200 w-[1800px] h-full my-20">
            <h1 className="text-6xl text-slate-950 text-center font-serif font-bold mb-16 ">Add Classes</h1>
            <form onSubmit={handleAddClasses}>
                <div className="grid grid-cols-2 gap-6 ">
                    <div>
                        <label>
                            <span className="text-2xl font-serif font-bold text-slate-950">Class Name <span className="text-rose-700">*</span></span>
                        </label>
                        <input type="text" className="w-full h-[70px] bg-white text-slate-950 ps-3 text-2xl mt-4" placeholder="Enter Class Name" name="name" required />
                    </div>
                    <div>
                        <label>
                            <span className="text-2xl font-serif font-bold text-slate-950">Instructor Name <span className="text-rose-700">*</span></span>
                        </label>
                        <input type="text" className="w-full h-[70px] bg-white text-slate-950 ps-3 text-2xl mt-4" defaultValue={user?.displayName} placeholder="Enter Your Name" name="InstructorName" required />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 my-10">
                    <div>
                        <label>
                            <span className="text-2xl font-serif font-bold text-slate-950">Instructor Email <span className="text-rose-700">*</span></span>
                        </label>
                        <input type="email" className="w-full h-[70px] bg-white text-slate-950 ps-3 text-2xl mt-4" defaultValue={user?.email} placeholder="Enter Your Email" name="email" required />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label>
                                <span className="text-2xl font-serif font-bold text-slate-950">Available Seats <span className="text-rose-700">*</span></span>
                            </label>
                            <input type="text" className="w-full h-[70px] bg-white text-slate-950 ps-3 text-2xl mt-4" placeholder="Enter Available Seats" name="seats" required />
                        </div>
                        <div>
                            <label>
                                <span className="text-2xl font-serif font-bold text-slate-950">Enroll Price <span className="text-rose-700">*</span></span>
                            </label>
                            <input type="text" className="w-full h-[70px] bg-white text-slate-950 ps-3 text-2xl mt-4" placeholder="Enter Enroll Price" name="price" required />
                        </div>
                    </div>
                </div>
                <div className='mb-3 mt-5'>
                    <label>
                        <span className='text-2xl font-serif font-bold text-slate-950'>Photo Url <span className="text-rose-700">*</span></span>
                    </label>
                    <br />
                    <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs text-2xl mt-2" name="image" required />
                </div>

                <input className="w-full h-[70px] bg-purple-300 mt-20 text-2xl font-serif font-bold text-slate-950" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClasses;