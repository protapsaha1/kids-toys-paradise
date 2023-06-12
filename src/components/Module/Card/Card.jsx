
const Card = ({ image, name, text }) => {
    return (
        <div>
            <img className="w-full h-[250px]" src={image} alt="" />
            <div className="pt-4 w-full">
                <h1 className="text-center text-3xl text-slate-950 font-serif font-bold uppercase">{name}</h1>
                <p className="text-end text-2xl mr-3 my-4 text-slate-950 font-serif font-bold uppercase">{text}</p>
            </div>
        </div>
    );
};

export default Card; 