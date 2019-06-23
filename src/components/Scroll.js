import React from "react";

const scroll = ({ children }) => (
  <div
    style={{
      overflowY: "scroll",
      height: "800px",
      border: "solid 2px blue"
    }}
  >
    {children}
  </div>
);

export default scroll;
