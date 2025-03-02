import React from "react";
import { dateConvertion } from "./Template";
import { useNavigate } from "react-router-dom";

const SearchedArticles = (props) => {
  const navigate = useNavigate();
  let { searchedArticles, loadingSearch, searchRef } = props;

  return (
    <section className="py-10 text-gray-800 container mx-auto " ref={searchRef}>
      <h1 className="text-4xl w-full font-medium mb-5">Searched Articles</h1>

      {loadingSearch ? (
        <div className="bg-gray-50  flex justify-center items-center p-4">
          <span className="relative flex size-10">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-700 opacity-75"></span>
            <span className="relative inline-flex size-10 rounded-full bg-gray-800"></span>
          </span>
        </div>
      ) : (
        <>
          {searchedArticles.length !== 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {searchedArticles.map((item) => (
                <div
                  key={item.id}
                  className=" h-full w-full sm:w-1/2 md:w-1/3 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 p-3"
                  style={{ width: "100%" }}
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
          ) : (
            <h1 className="text-7xl text-center py-10 font-bold">
              Article not found
            </h1>
          )}
        </>
      )}
    </section>
  );
};

export default SearchedArticles;
