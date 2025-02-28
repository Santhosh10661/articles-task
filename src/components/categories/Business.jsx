import React from "react";
import Template from "../Template";
import { useSelector } from "react-redux";

const Business = () => {
  const data = useSelector((state) => state.data.data);
  const classN = "business";
  const qoutes = "Opportunities don't happen. You create them";
  return <Template data={data.business} classN={classN} qoutes={qoutes} />;
};
export default Business;
