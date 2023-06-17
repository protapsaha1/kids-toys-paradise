import { useState } from "react";

const Pagination = ({ dataLength, elementEachPages }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const page = Math.ceil(dataLength / elementEachPages);
    // const firstIndex = (currentPage - 1) * elementEachPages;
    // const endIndex = firstIndex + elementEachPages;elements,
    // elements.slice(dataLength, elementEachPages);
    // TODO Show data as per index

    const totalPage = [...Array(page).keys()];
    const handlePagination = currentIndex => {
        setCurrentPage(currentIndex);
    }
    return (
        <div className="flex items-center justify-center ">
            {totalPage &&
                totalPage.map(number => <button
                    onClick={handlePagination}
                    key={number + 1}
                    className={currentPage === number ? 'px-7 py-5 shadow-lg text-white text-4xl font-bold bg-rose-600 rounded-xl mx-3' : 'px-7 py-5 shadow-lg text-white text-4xl font-bold bg-slate-800 rounded-xl mx-3'}
                >
                    {number + 1}
                </button>)
            }
        </div>
    );
};

export default Pagination;
