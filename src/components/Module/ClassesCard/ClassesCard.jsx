// import { BiSolidBookAdd } from "react-icons/bi";
const ClassesCard = ({ eachClass }) => {
    const { class_name, image, price } = eachClass;
    return (
        <div className="w-[400px] h-[600px] rounded-lg bg-slate-100 relative p-3">
            <img className="w-full" src={image} alt="" />
            <div className="pt-4 w-full">
                <h1 className="text-center text-3xl text-slate-950 font-serif font-bold uppercase">{class_name}</h1>
                <p className="text-end text-2xl mr-3 my-4 text-slate-950 font-serif font-bold uppercase">{price}</p>
                <button className=" bg-gradient-to-r from-sky-200 to-blue-400 w-[240px] px-3 h-16 mt-20 mx-auto text-3xl font-serif font-bold text-slate-800 flex items-center ">Booking class</button>
            </div>
        </div>
    );
};

export default ClassesCard;