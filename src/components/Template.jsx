import React, { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import PopularArticles from "./PopularArticles";
import LatestArticles from "./LatestArticles";
import SearchedArticles from "./SearchedArticles";

const Template = (props) => {
  let { data, classN, qoutes } = props;
  let [isSearched, setIsSearched] = useState(false);
  let [searchedArticles, setSearchedArticles] = useState([]);
  let [loadingSearch, setLoadingSearch] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [loadingSearch]); // Runs when `isSearched` changes

  const FindTheArticles = (searched) => {
    setLoadingSearch(true);
    let articles = data.filter((art) =>
      art.title.toLowerCase().includes(searched.toLowerCase())
    );
    setSearchedArticles(articles);
    setTimeout(() => {
      setLoadingSearch(false);
    }, 1000);
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
        <SearchedArticles
          searchRef={searchRef}
          loadingSearch={loadingSearch}
          searchedArticles={searchedArticles}
        />
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
