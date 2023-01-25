import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-xl space-x-4 bg-slate-50 shadow-gray-50 p-4 shadow-lg shadow-gray-50 sticky top-0">
      <Link to="/home">Home</Link>
      <Link to="/blogs">Blogs</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Header;
