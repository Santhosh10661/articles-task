import React from "react";
import Template from "../Template";
import { useSelector } from "react-redux";

const Sports = () => {
  const data = useSelector((state) => state.data.data);
  const classN = "sports";
  const qoutes = "Champions keep playing until they get it right";
  return <Template data={data.sports} classN={classN} qoutes={qoutes} />;
};
export default Sports;
