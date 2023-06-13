import { useState } from "react";

const Pagination = ({ dataLength }) => {
    const [currentPage, setCurrentPage] = useState(0);
    // const [elementEachPages, setElementEachPages] = useState(elementEachPage);
    const elementEachPages = 6;

    const page = Math.ceil(dataLength / elementEachPages);
    const totalPage = [...Array(page).keys()];
    const handlePagination = currentIndex => {
        setCurrentPage(currentIndex);
    }
    return (
        <div className="flex items-center justify-center ">
            {
                totalPage.map(number => <button
                    onClick={handlePagination}
                    key={number + 1}
                    className={currentPage === number ? 'px-4 py-3 shadow-lg text-white text-2xl font-bold bg-rose-600' : 'px-4 py-3 shadow-lg text-white text-2xl font-bold bg-slate-800'}
                >
                    {number + 1}
                </button>)
            }
        </div>
    );
};

export default Pagination;
