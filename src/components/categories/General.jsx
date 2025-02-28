import React from "react";
import Template from "../Template";
import { useSelector } from "react-redux";

const General = () => {
  const data = useSelector((state) => state.data.data);
  const classN = "general";
  const qoutes =
    "Freedom of the press is not just important to democracy, it isdemocracy";
  return <Template data={data.general} classN={classN} qoutes={qoutes} />;
};
export default General;
