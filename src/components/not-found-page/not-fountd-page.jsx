import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFoundPage = () => {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link to="/">Return to main page</Link>
    </>
  );
};

export default NotFoundPage;
