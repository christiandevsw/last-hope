import React from "react";
import { Son } from "./Son";

export const Support = ({ array, addNew }) => {
  const triple = array.map(el => el * 3);

  //forma corta sin pasar por son
  //   return <div>{triple}</div>;
  return <Son lista={triple} />;
};
