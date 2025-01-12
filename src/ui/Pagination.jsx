import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";
import { pageSize } from "../utils/constant";
// import { useSearchParams } from "react-router-dom"

const Pagination = ({count}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / pageSize);
  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
    };
    
    if (currentPage > pageCount) {
        currentPage = pageCount;
        searchParams.set("page", currentPage);
        setSearchParams(searchParams);
      }

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  };

  if(pageCount <= 1) return null
  
  return (
    <div className="flex flex-col items-center mt-6">
      <p className="text-gray-700 mb-2">
        Showing <span>{(currentPage - 1) * pageSize + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * pageSize}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="flex space-x-4">
        <Button
          onClick={prevPage} 
          disabled={currentPage === 1}
          className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300 disabled:opacity-50"
        >
          <HiChevronLeft className="mr-1" /> <span>Previous</span>
        </Button>
        <Button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="flex items-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition duration-300 disabled:opacity-50"
        >
          <span>Next</span> <HiChevronRight className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
