import React from "react";
import logo from "../../img/letest-post/banner.png";
import img from "../../img/travel9.jpg";
import img2 from "../../img/travel8.jpg";
import img3 from "../../img/travel7.jpg";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <img className="w-full h-100" src={logo} alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-16">
        <Link>
          <img className="w-100 h-60" src={img} alt="" />
        </Link>
        <Link>
          <img className="w-100 h-60" src={img2} alt="" />
        </Link>
        <Link>
          <img className="w-100 h-60" src={img3} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
