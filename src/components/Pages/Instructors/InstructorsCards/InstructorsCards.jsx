import Card from "../../../Module/Card/Card";

const InstructorsCards = ({ instructor }) => {
    const { _id, name, email, image } = instructor;
    const handleInstructorClass = id => {
        console.log(id)
    }

    return (
        <div>
            <div className="w-[400px] h-[600px] rounded-lg bg-slate-100 p-3">
                <Card
                    image={image}
                    name={`Inst: ${name}`}
                    text={email}
                />
                <button onClick={() => handleInstructorClass(_id)} className=" bg-gradient-to-r from-sky-200 to-blue-400 w-[240px] px-10 h-16 mt-20 mx-auto text-3xl font-serif font-bold text-slate-800 flex items-center ">View class</button>
            </div >
        </div>
    );
};

export default InstructorsCards;