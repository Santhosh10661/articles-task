import React from "react";
import { dateConvertion } from "./Template";

const SearchedArticles = (props) => {
  let { searchedArticles } = props;
  console.log("ssssssss", searchedArticles);

  return (
    <section className="py-10 text-gray-800 container mx-auto">
      <h1 className="text-4xl w-full font-medium mb-5">Searched Articles</h1>

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
        <h1 className="text-7xl py-10 font-bold">Article not found</h1>
      )}
    </section>
  );
};

export default SearchedArticles;
