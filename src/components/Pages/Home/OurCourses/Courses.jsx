
const Courses = ({ classes }) => {
    const { class_name, image, price, seats } = classes;
    return (
        <div className="w-[600px] h-[500px] rounded-lg bg-slate-50 shadow-xl">
            <div className="w-full h-full border-4 border-slate-700">
                {/* <div className="w-full h-full p-2" > */}
                <img className="w-full h-full" src={image} alt="" />
                {/* </div> */}
                <div className="p-4">
                    <h1 className="text-xl text-slate-800 font-bold">{class_name}</h1>
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl text-slate-800 font-bold">Fee: {price}</h1>
                        <h1 className="text-xl text-slate-800 font-bold">Seats: {seats}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;