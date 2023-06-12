import { FaEdit } from 'react-icons/fa';
// import useClasses from '../../../../CustomHook/useClasses';
import useTitle from '../../../../CustomHook/useTitle';
import { useQuery } from '@tanstack/react-query';


const MyAddedClasses = () => {
  useTitle("My Added Classes");
  // const { classes } = useClasses();
  const { data: addClasses = [] } = useQuery({
    queryKey: ['instructorClass'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/instructorClass')
      return res.json();
    }
  })
  return (
    <>
      <h1 className="text-6xl font-serif font-bold text-slate-950 text-start my-10">Total Classes {addClasses.length}</h1>
      <div className="overflow-x-auto w-[1800px] border-l-2 border-r-2  shadow-lg ">
        <table className="table">
          <thead className='bg-sky-500'>
            <tr>
              <th className="text-2xl font-serif font-bold text-slate-950">#</th>
              <th className="text-2xl font-serif font-bold text-slate-950">Name</th>
              <th className="text-2xl font-serif font-bold text-slate-950">Price</th>
              <th className="text-2xl font-serif font-bold text-slate-950">Seats</th>
              <th className="text-2xl font-serif font-bold text-slate-950">Status</th>
              <th className="text-2xl font-serif font-bold text-slate-950">Enrolled</th>
              <th className="text-2xl font-serif font-bold text-slate-950">Update</th>
            </tr>
          </thead>
          <tbody>
            {
              addClasses.map((eachCl, index) => <tr
                key={eachCl._id}
              >
                <th className="text-2xl font-serif font-bold text-slate-950">
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={eachCl.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl.class_name}</h1>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl.price}</h1>
                </td>
                <td>
                  <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl.seats}</h1>
                </td>
                <td>
                  <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl.status}</h1>
                </td>
                <td>
                  <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl.price}</h1>
                </td>
                <th>
                  <button className="bg-orange-500 px-6 py-5 rounded-xl hover:bg-orange-700"><FaEdit className="text-white w-10 h-10" /></button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyAddedClasses;