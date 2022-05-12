import React from "react";
import NavBarWithLink from "./NavBarWithLink";
import { useParams } from "react-router-dom";

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
