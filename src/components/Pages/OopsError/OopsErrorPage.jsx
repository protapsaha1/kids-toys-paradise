import err from '../../../assets/image/error.gif';


const OopsErrorPage = () => {
    const handleBack = () => {
        history.back()
    }
    return (
        <div className='mx-auto py-20'>
            <img className='mx-auto my-20' src={err} alt="" />
            <div className='flex justify-center items-center'>
                <h1 className="text-6xl text-center">You can,t access this path</h1>
                <button className='text-sky-600 text-2xl ms-5 hover:underline font-bold' onClick={handleBack}>Go Back</button>
            </div>
        </div>
    );
};

export default OopsErrorPage;