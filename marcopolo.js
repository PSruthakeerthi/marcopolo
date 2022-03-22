import React from "react";
import { useState } from "react";

function Marcopolo() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {toggle
        ? [
            <h1 id="marco-polo">Polo</h1>,
            <button id="marco-polo-toggler" onClick={() => setToggle(!toggle)}>
              Marco
            </button>
          ]
        : [
            <h1 id="marco-polo">Marco</h1>,
            <button id="marco-polo-toggler" onClick={() => setToggle(!toggle)}>
              Polo
            </button>
          ]}
    </>
  );
}

export default Marcopolo;
