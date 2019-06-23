import React from "react";

const roboSearch = ({ search }) => (
  <div className="pa2">
    <input
      onChange={search}
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Robo Search"
    />
  </div>
);

export default roboSearch;
