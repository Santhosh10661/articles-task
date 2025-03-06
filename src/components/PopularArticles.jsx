import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useNavigate } from "react-router-dom";
import { dateConvertion } from "./Template";
import { useSelector } from "react-redux";

const PopularArticles = (props) => {
  let { data } = props;
  const themeDark = useSelector((state) => state.theme.dark);
  let navigate = useNavigate();

  return (
    <section
      className={`py-10 container mx-auto ${
        themeDark ? "text-gray-50" : "text-gray-800"
      }`}
    >
      <h1 className="text-4xl w-full font-medium mb-5">Popular Articles</h1>

      <div className="flex flex-col lg:flex-row">
        <div className=" lg:w-50 flex-1 ">
          <article
            className={`cursor-pointer  shadow-sm hover:shadow-2xl transition-shadow duration-300 p-3 ${
              themeDark ? "bg-gray-900" : "bg-gray-50"
            }`}
            style={{ height: "100%" }}
            onClick={() => navigate(`/fullarticle/${data[0].id}`)}
          >
            <LazyLoadImage
              src={data[0].urlToImage}
              alt=""
              className=""
              style={{ width: "100%" }}
              effect="blur"
            />
            <p className="mt-5">{dateConvertion(data[0].publishedAt)}</p>
            <h1 className="text-4xl line-clamp-2 font-medium my-4">
              {data[0].title}
            </h1>
            <p className="text-xl">{data[0].description}</p>
          </article>
        </div>

        <div className=" lg:w-50 flex-1 grid grid-cols-1 gap-10 mx-3 xl:mx-10 ">
          {data.slice(2, 5).map((da) => {
            return (
              <article
                className={`flex flex-1  cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-300 p-3 ${
                  themeDark ? "bg-gray-900" : "bg-gray-50"
                }`}
                onClick={() => navigate(`/fullarticle/${da.id}`)}
                key={da.id}
              >
                <div className="relative flex-1 flex justify-center items-center ">
                  <LazyLoadImage
                    src={da.urlToImage}
                    alt=""
                    className="rounded-md object-cover"
                    effect="blur"
                  />
                </div>
                <div className="flex-2 mx-10">
                  <p>{dateConvertion(da.publishedAt)}</p>
                  <h1 className="text-4xl font-medium line-clamp-3 my-3">
                    {da.title}
                  </h1>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default PopularArticles;
