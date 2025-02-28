import React, { useState } from "react";
import Hero from "./Hero";
import PopularArticles from "./PopularArticles";
import LatestArticles from "./LatestArticles";
import SearchedArticles from "./SearchedArticles";

const Template = (props) => {
  let { data, classN, qoutes } = props;
  let [isSearched, setIsSearched] = useState(false);
  let [searchedArticles, setSearchedArticles] = useState([]);

  const FindTheArticles = (searched) => {
    let articles = data.filter((art) =>
      art.title.toLowerCase().includes(searched.toLowerCase())
    );

    setSearchedArticles(articles);
  };

  return (
    <>
      <Hero
        classN={classN}
        qoutes={qoutes}
        setIsSearched={setIsSearched}
        FindTheArticles={FindTheArticles}
      />
      {isSearched ? (
        <SearchedArticles searchedArticles={searchedArticles} />
      ) : (
        <>
          <PopularArticles data={data} dateConvertion={dateConvertion} />
          <LatestArticles data={data} dateConvertion={dateConvertion} />
        </>
      )}
    </>
  );
};

export const dateConvertion = (dateString) => {
  const date = new Date(dateString);

  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  };

  return date.toLocaleString("en-US", options).replace(",", "");
};

export default Template;
