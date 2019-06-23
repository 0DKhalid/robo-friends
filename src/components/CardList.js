import React from "react";
import Card from "./Card";

const cardArray = ({ robots }) =>
  robots.map(user => (
    <Card key={user.id} id={user.id} name={user.name} email={user.email} />
  ));

export default cardArray;
