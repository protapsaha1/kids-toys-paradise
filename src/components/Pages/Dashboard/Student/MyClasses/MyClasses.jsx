
const MyClasses = () => {
    return (
        <div className="overflow-x-auto w-[1800px] border-l-2 border-r-2  shadow-lg ">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-2xl font-serif font-bold text-slate-950">
                        </th>
                        <th className="text-2xl font-serif font-bold text-slate-950">Name</th>
                        <th className="text-2xl font-serif font-bold text-slate-950">Job</th>
                        <th className="text-2xl font-serif font-bold text-slate-950">Favorite Color</th>
                        <th className="text-2xl font-serif font-bold text-slate-950"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-serif font-bold text-slate-950">United States</h1>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h1 className="text-2xl font-serif font-bold text-slate-950">Desktop Support Technician</h1>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default MyClasses;