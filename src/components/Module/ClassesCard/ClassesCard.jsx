
const ClassesCard = ({ eachClass }) => {
    const { class_name, image_url, price } = eachClass;
    return (
        <div className="w-[300px] h-[400px] rounded-lg">
            <img className="p-2 w-full h-full" src={image_url} alt="" />
            <h1 className="text-center text-3xl font-serif font-bold uppercase">{class_name}</h1>
            <p>{price}</p>
        </div>
    );
};

export default ClassesCard;