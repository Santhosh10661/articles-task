import React from "react";
import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { dateConvertion } from "./Template";

const LatestArticles = (props) => {
  let { data } = props;
  let navigate = useNavigate();

  const ITEMS_PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="py-10 text-gray-800 container mx-auto">
      <h1 className="text-4xl w-full font-medium mb-5">Latest Articles</h1>

      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {paginatedItems.map((item) => (
            <div
              key={item.id}
              className=" h-full w-full  cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 p-3"
              // style={{ width: "100%" }}
              onClick={() => navigate(`/fullarticle/${item.id}`)}
            >
              <img
                src={item.urlToImage}
                alt=""
                className=" aspect-1/1 object-cover rounded-md"
              />
              <p className="mt-5">{dateConvertion(item.publishedAt)}</p>
              <h1 className="text-2xl line-clamp-2 font-medium my-2">
                {item.title}
              </h1>
              <p className="text-xl line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* ✅ Pagination Controls */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 mt-6">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center rounded-full shadow-md border px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer "
            }`}
          >
            <FaArrowLeftLong className=" mx-2" /> Previous
          </button>

          <span className="text-sm text-gray-700">
            Page <span className="font-medium">{currentPage}</span> of
            <span className="font-medium">{totalPages}</span>
          </span>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`relative inline-flex items-center rounded-full shadow-md border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer "
            }`}
          >
            Next
            <FaArrowRightLong className=" mx-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
