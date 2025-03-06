import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Button } from "rsuite";
import { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { dateConvertion } from "./Template";
import { useSelector } from "react-redux";

const LatestArticles = (props) => {
  let { data } = props;
  const themeDark = useSelector((state) => state.theme.dark);
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
    <section
      className={`py-10 container mx-auto ${
        themeDark ? "text-gray-50" : "text-gray-800"
      } min-h-dvh`}
    >
      <h1 className="text-4xl w-full font-medium mb-5">Latest Articles</h1>

      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {paginatedItems.map((item) => (
            <article
              key={item.id}
              className={`h-full w-full  cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-300 p-3 ${
                themeDark ? "bg-gray-900" : "bg-gray-50"
              }`}
              // style={{ width: "100%" }}
              onClick={() => navigate(`/fullarticle/${item.id}`)}
            >
              <LazyLoadImage
                src={item.urlToImage}
                alt=""
                className="object-cover rounded-md"
                effect="blur"
              />
              <p className="mt-5">{dateConvertion(item.publishedAt)}</p>
              <h1 className="text-2xl line-clamp-2 font-medium my-2">
                {item.title}
              </h1>
              <p className="text-xl line-clamp-2">{item.description}</p>
            </article>
          ))}
        </div>

        {/* ✅ Pagination Controls */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 mt-6 ">
          <Button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-4 py-2 text-sm font-medium  ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer "
            }`}
            style={{
              border: "1px solid",
              borderRadius: "20px",
              color: themeDark ? "#f9fafb" : "#1e2939",
              backgroundColor: themeDark ? "#1e2939" : "#f9fafb",
            }}
          >
            <FaArrowLeftLong className=" mx-2" /> Previous
          </Button>

          <span
            className={`text-sm   ${
              themeDark ? "text-gray-50" : "text-gray-700"
            }`}
          >
            Page <span className="font-medium">{currentPage}</span> of
            <span className="font-medium">{totalPages}</span>
          </span>

          <Button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`relative px-4 py-2 text-sm font-medium  ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer "
            }`}
            style={{
              border: "1px solid",
              borderRadius: "20px",
              color: themeDark ? "#f9fafb" : "#1e2939",
              backgroundColor: themeDark ? "#1e2939" : "#f9fafb",
            }}
          >
            Next
            <FaArrowRightLong className=" mx-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
