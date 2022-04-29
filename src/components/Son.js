import React from "react";

export const Son = ({ lista }) => {
  const double = lista.map(el => el * 2);
  return <div>{double}</div>;
};
