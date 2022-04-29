import React, { useState } from "react";
import { Son } from "./Son";
import { Support } from "./Support";

const myList = [3, 6, 9, 15];

export const HomeApp = () => {
  const [lista, setLista] = useState(myList);
  const enabled = false;

  const addNew = ele => {
    setLista([...lista, ele]);
  };

  return (
    <div>
      {lista}
      {/* {enabled ? <Son lista={lista} /> : null} */}
      {enabled ? (
        <Son lista={lista} />
      ) : (
        <Support array={lista} addNew={addNew} />
      )}
    </div>
  );
};
