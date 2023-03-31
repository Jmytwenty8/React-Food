import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!!!</h1>
      <h3>Something is wrong while accessing the page route.</h3>
      <h4>{`${status} : ${statusText}`}</h4>
    </div>
  );
};

export default Error;
