import Swal from "sweetalert2";
import useBookedClasses from "../../../../CustomHook/useBookedClasses";
import useTitle from "../../../../CustomHook/useTitle";
import { Link } from "react-router-dom";
import useAxiosHook from "../../../../CustomHook/useAxiosHook";
import Pagination from "../../../../Module/Pagination/Pagination";
// import Payment from "../Payments/Payment/Payment";
// import { useState } from "react";

const MyClasses = () => {
    useTitle("My classes");
    const { bookedClass, refetch } = useBookedClasses();
    const { axiosProtect } = useAxiosHook();
    // const [price, setPrice] = useState();


    // const handlePayment = price => {
    //     // const price = item.price
    //     console.log(price)
    //     return price;
    //     // return setPrice(price);
    // }




    const handleDeleteBookedClass = id => {
        axiosProtect.delete(`/bookedClass/${id}`)
            .then(data => {
                console.log(data.data)
                if (data.data.deletedCount > 0) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Do You Want to Delete Booking Class",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        refetch();
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Delete Booking Class Successfully',
                                'success'
                            )
                        }
                    })
                }
            })
    }

    return (
        <>
            <h1 className="text-6xl font-serif font-bold text-slate-950 text-start my-10">Total Booked Class {bookedClass.length}</h1>
            <div className="overflow-x-auto w-[1800px] border-l-2 border-r-2  shadow-lg ">
                <table className="table">
                    <thead className="bg-sky-400">
                        <tr>
                            <th className="text-2xl font-serif font-bold text-slate-950">#</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Name</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Price</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Payment</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedClass &&
                            bookedClass.map((myClass, index) => <tr
                                key={myClass._id}
                            >
                                <th className="text-2xl font-serif font-bold text-slate-950">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-16 h-16">
                                                <img src={myClass?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-serif font-bold text-slate-950">{myClass?.name}</h1>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">$ {myClass?.price}</h1>
                                </td>
                                <td>
                                    <>
                                        <Link to="/dashboard/payment"><button
                                            className="bg-blue-800 px-6 py-5 rounded-xl hover:bg-blue-600 text-2xl font-serif font-bold text-white">Pay</button></Link>
                                        {/* {!myClass.price || <Payment  className="hidden" price={myClass?.price} />} */}
                                    </>
                                </td>
                                <th>
                                    <button onClick={() => handleDeleteBookedClass(myClass._id)} className="bg-rose-800 px-6 py-5 rounded-xl hover:bg-rose-600 text-2xl font-serif font-bold text-white">Del</button>
                                </th>
                            </tr>

                            )}

                    </tbody>
                </table>
            </div >
            <div className="mt-10">
                <Pagination
                    dataLength={bookedClass.length}
                    elementEachPages={6}
                />
            </div>
        </>
    );
};

export default MyClasses;