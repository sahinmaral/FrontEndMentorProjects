import React from "react";

function PageDescription({ title, description }) {
  return (
    <>
      <h1 className="page-title">{title}</h1>
      <p className="page-description">{description}</p>
    </>
  );
}

export default PageDescription;
