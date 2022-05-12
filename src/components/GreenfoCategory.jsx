import React from "react";
import { useParams } from "react-router-dom";
import NavBarWithLink from "./NavBarWithLink";

const GreenfoCategory = () => {
  const { title } = useParams();

  return (
    <>
      <NavBarWithLink />
      <div className={`greenfo_${title}`}>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default GreenfoCategory;
