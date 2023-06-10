import useClasses from "../../../../CustomHook/useClasses";

const ManageClasses = () => {
    const { classes } = useClasses();
    console.log(classes)
    return (
        <>
            <h1 className="text-6xl font-serif font-bold text-slate-950 text-start my-10">Total Classes {classes.length}</h1>
            <div className="overflow-x-auto w-[1800px] border-l-2 border-r-2  shadow-lg">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-2xl font-serif font-bold text-slate-950">
                                #
                            </th>
                            {/* <th className="text-2xl font-serif font-bold text-slate-950"></th> */}
                            <th className="text-2xl font-serif font-bold text-slate-950">Class Name & Image</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Instructors Name</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Instructors Email</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Available Seats</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Price</th>
                            <th className="text-2xl font-serif font-bold text-slate-950">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((classInfo, index) => <tr
                                key={classInfo._id}
                            >
                                <th className="text-2xl font-serif font-bold text-slate-950">
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classInfo?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.class_name}</h1>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.instructor_name}</h1>
                                </td>
                                <td>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.instructor_email}</h1>
                                </td>
                                <th>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.seats}</h1>
                                </th>
                                <th>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.price}</h1>
                                </th>
                                <th>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">{classInfo?.status}</h1>
                                </th>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageClasses;