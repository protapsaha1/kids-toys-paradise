import { FaEdit, FaTimes } from 'react-icons/fa';
// import useClasses from '../../../../CustomHook/useClasses';
import { } from "react-icons/fa";
import useTitle from '../../../../CustomHook/useTitle';
import { useQuery } from '@tanstack/react-query';
import Pagination from '../../../../Module/Pagination/Pagination';
import useAxiosHook from '../../../../CustomHook/useAxiosHook';
import Swal from 'sweetalert2';
import { useRef } from 'react';
// import useClasses from '../../../../CustomHook/useClasses';



const MyAddedClasses = () => {
  useTitle("My Added Classes");
  const refUpdate = useRef(null);
  const refName = useRef(null);

  // const { classes } = useClasses();
  const { axiosProtect } = useAxiosHook();
  const { data: addClasses = [], refetch } = useQuery({
    queryKey: ['instructorClass'],
    queryFn: async () => {
      const res = await axiosProtect.get('/instructorClass')
      return res.data;
    }
  });


  const openModal = id => {
    const modalId = id;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  };
  // const closeModal = id => {
  //   const modalId = id;
  //   const modal = document.getElementById(modalId);
  //   if (modal) {
  //     modal.close();
  //   }
  // };
  const classes = addClasses.map(ehClass => console.log(ehClass._id))
  // console.log(classes)
  console.log(classes)

  const handleUpdateClass = (e,) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const seats = parseFloat(form.seats.value);
    const price = parseFloat(form.price.value);

    console.log(name, seats, price)
    const updateData = {
      class_name: name, seats: seats, price: price
    };
    console.log(updateData)
    axiosProtect.put(`/instructorClass/${classes._id}`, updateData)
      .then(data => {
        console.log(data.data)
        refetch();
        // TODO
        //     if (data.data.modifiedCount > 0) {
        //       Swal.fire({
        //         icon: 'success',
        //         title: 'success!',
        //         text: 'Updated Class Successfully',
        //         showConfirmButton: 'ok',
        //       })
        //     }
        // form.reset();
        //     history.back();
      })

  };


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
              {/* {<th className="text-2xl font-serif font-bold text-slate-950">Feedback</th>} */}
              <th className="text-2xl font-serif font-bold text-slate-950">Update</th>
            </tr>
          </thead>
          <tbody>
            {addClasses &&
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
                        <img src={eachCl?.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl?.class_name}</h1>
                    </div>
                  </div>
                </td>
                <td>
                  <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl?.price}</h1>
                </td>
                <td>
                  <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl?.seats}</h1>
                </td>
                <td>
                  <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl?.status}</h1>
                </td>
                <td>
                  <h1 className="text-2xl font-serif font-bold text-slate-950">{eachCl?.enrolled}</h1>
                </td>
                {/* {<td> */}
                {/* <button className="bg-sky-500 px-6 py-5 text-xl font-bold text-slate-800 rounded-xl hover:bg-sky-700" onClick={>Feedback</button> */}
                {/* <dialog id={eachCl._id} className="modal">
                    <form method="dialog" className="modal-box">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      <p className="py-4">Press ESC key or click outside to close</p>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog> */}
                {/* </td>} */}
                <th>
                  <button ref={refUpdate} onClick={() => openModal(eachCl._id)} className="bg-orange-500 px-6 py-5 rounded-xl hover:bg-orange-700"><FaEdit className="text-white w-10 h-10" /></button>
                  <div className=''>
                    <dialog id={eachCl._id} className="modal bg-slate-400">
                      <form onSubmit={handleUpdateClass} method="dialog" className="modal-box bg-green-100 w-[1800px] max-w-screen-lg p-10">
                        {/* <button onClick={closeModal} className="p-3 bg-blue-600 rounded-lg"><FaTimes className='text-white w-12 h-12' /></button> */}
                        <h3 className="font-bold text-6xl text-center text-slate-950">Update Class</h3>
                        <div className="">
                          <div className='w-full'>
                            <label>
                              <span className='text-slate-800 text-xl font-serif font-bold'>Class Name</span>
                            </label>
                            <br />
                            <input type="text" ref={refName} name='name' placeholder='Name' defaultValue={eachCl?.class_name} className={refName === null ? 'text-2xl ps-3 w-full text-black bg-red-100 h-[70px] mt-3 border-b-4 border-b-rose-500' : 'text-2xl ps-3 w-full text-black bg-red-100 h-[70px] mt-3 border-b-4 border-b-green-500'} />
                          </div>
                          <br />
                          <div className='grid grid-cols-2 gap-3'>
                            <div className='w-full'>
                              <label>
                                <span className='text-slate-800 text-xl font-serif font-bold'>Seats</span>
                              </label>
                              <br />
                              <input type="text" name='seats' placeholder='Seats' defaultValue={eachCl?.seats} className='text-2xl ps-3 w-full text-black bg-red-100 h-[70px] mt-3 border-b-4 border-b-rose-500' required />
                            </div>
                            <div className='w-full'>
                              <label>
                                <span className='text-slate-800 text-xl font-serif font-bold'>Price</span>
                              </label>
                              <br />
                              <input type="text" name='price' placeholder='Price' defaultValue={eachCl?.price} className='text-2xl ps-3 w-full text-black bg-red-100 h-[70px] mt-3 border-b-4 border-b-rose-500' required />
                            </div>
                          </div>
                        </div>
                        <input type="submit" value="Update Class" className='text-2xl font-serif text- font-bold my-10 bg-rose-500 px-4 py-3 rounded-xl text-center' required />
                      </form>
                    </dialog>
                  </div>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      <div className='mt-10'>
        <Pagination
          // elements={addClasses}
          dataLength={addClasses.length}
          elementEachPages={6}
        />
      </div>
    </>
  );
};

export default MyAddedClasses;