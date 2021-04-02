import React from "react";
import { Link } from "react-router-dom";
import "./Headers.css";

const Headers = () => {
  return (
    <div className="top">
      
        <div className="header">
        <div className="link">
        <Link to="/addProducts"><button className="btn btn-primary">Add Product</button></Link>
        </div>
        <Link to="/manageProduct"><button className="btn btn-primary">Manage Product</button></Link>
        </div>
      
    </div>
  );
};

export default Headers;
