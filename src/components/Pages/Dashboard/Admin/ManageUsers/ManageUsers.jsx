import { FaChalkboardTeacher, FaUserCheck } from "react-icons/fa";
import useUsers from "../../../../CustomHook/useUsers";
import Swal from "sweetalert2";
import useTitle from "../../../../CustomHook/useTitle";

const ManageUsers = () => {
    useTitle("Manage User");
    
    const { users, refetch } = useUsers();
    // console.log(users)


    const handleIsAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `Congratulations ${user.name} yor are now Admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleIsInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `Congratulations ${user.name} yor are now Instructor`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <>
            <h1 className="text-6xl font-serif font-bold text-slate-950 text-start my-10">Total Users {users.length}</h1>
            <div className="overflow-x-auto w-[1800px] border-l-2 border-r-2  shadow-lg ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-2xl font-serif font-bold text-slate-950">#</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Name</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Email</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Admin Role</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Instructor Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th className="text-2xl font-serif font-bold text-slate-950">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-serif font-bold text-slate-950">{user?.name}</h1>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{user?.email}</h1>
                                </td>
                                <td>
                                    {
                                        console.log(users?.role)

                                    }
                                    {
                                        users?.role === 'admin' ? 'admin' :
                                            <button className="bg-rose-800 px-6 py-5 rounded-xl hover:bg-rose-600" onClick={() => handleIsAdmin(user)}><FaUserCheck className="text-white w-10 h-10" /></button>
                                    }
                                </td>
                                <th>
                                    {users?.role === 'instructor' ? 'instructor' :
                                        <button className="bg-blue-800 px-6 py-5 rounded-xl hover:bg-blue-600" onClick={() => handleIsInstructor(user)}><FaChalkboardTeacher className="text-white w-10 h-10" /></button>
                                    }
                                </th>
                            </tr>
                            )
                        }

                    </tbody>
                </table >
            </div >
        </>
    );
};

export default ManageUsers;