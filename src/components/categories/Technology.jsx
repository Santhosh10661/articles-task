import React from "react";
import Template from "../Template";
import { useSelector } from "react-redux";

const Technology = () => {
  const data = useSelector((state) => state.data.data);
  const classN = "technology";
  const qoutes =
    "the technology you use impresses no one. The experience you create with it is everything";
  return <Template data={data.technology} classN={classN} qoutes={qoutes} />;
};
export default Technology;
