import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css";

function Nav() {
  return (
    <div className="nav-main">
      <Link to={"/"}>Home</Link>
      <div>
        <Link to={"/products"}>Products</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/cart"}>
          Cart <span>0</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
