import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { dateConvertion } from "./components/Template";
import CommentSection from "./components/CommentSection";
import { IoHome } from "react-icons/io5";
import ScrollTop from "./components/ScrollTop";

const FullArticle = (props) => {
  const { id } = useParams();
  const themeDark = useSelector((state) => state.theme.dark);
  const data = useSelector((state) => state.data.data);
  let artCat = id.split("-")[0];
  let navigate = useNavigate();

  const openedArt = Object.values(data)
    .flat()
    .filter((da) => da.id === id);

  const related = [...data[artCat].filter((item) => item.id !== id)].slice(
    1,
    9
  );

  return (
    <section className={`p-4 ${themeDark ? "text-gray-50" : "text-gray-800"}`}>
      <ScrollTop />
      <div className="flex justify-between">
        <NavLink to={-1} className="py-3 flex items-center cursor-pointer">
          <FaArrowLeftLong className=" " /> <span className="mx-3">Back</span>
        </NavLink>
        <NavLink
          to={"/"}
          className="py-3 text-2xl flex items-center cursor-pointer"
        >
          <IoHome className=" " />
        </NavLink>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-2 p-2 ">
          <h1 className="text-2xl md:text-5xl font-bold md:font-medium my-5">
            {openedArt[0].title}
          </h1>
          <img
            src={openedArt[0].urlToImage}
            alt="not found"
            className="mx-auto"
          />
          <h1 className="text-3xl my-5">
            {openedArt[0].content
              ? openedArt[0].content.replace(/[….][\s\S]*$/, "").trim()
              : ""}
          </h1>

          <p className="text-3xl">{openedArt[0].description}</p>

          <div className="flex justify-between my-10">
            <p>{dateConvertion(openedArt[0].publishedAt)}</p>
            <a href={openedArt[0].url} target="blank">
              publised by
            </a>
          </div>
          <CommentSection
            artCat={artCat}
            id={id}
            comment={openedArt[0].comment}
          />
        </div>
        <div className="flex-1 lg:mx-5 ">
          <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-5 text-center">
            Related Articles
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6">
            {related.map((item) => {
              return (
                <div
                  className="w-full h-fit cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300 p-3"
                  onClick={() => navigate(`/fullarticle/${item.id}`)}
                  key={item.id}
                >
                  <img src={item.urlToImage} alt="" className="aspect-1/1" />

                  <h1 className="text-md line-clamp-2 my-2">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullArticle;
