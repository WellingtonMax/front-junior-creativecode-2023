import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">
        <Button type="primary">Go to Home Page</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;