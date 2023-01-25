import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/letest-post/about.jpg";

const About = () => {
  return (
    <div className="mt-16">
      <h3 className="text-xl m-16 text-gray-600">ABOUT</h3>
      <div className=" bg-gray-50 p-4 m-16 bg-slate-50 shadow-gray-50 p-4 shadow-lg shadow-gray-200">
        <div className="">
          <img className="w-100 h-100 mb-4 mx-8" src={img} alt="" />
          <p className="text-gray-400 mb-4">
            I'm Shane, a girly girl and lover of life. <br /> Join me on the
            journey to find latest in fashion.
          </p>
          <Link to="/about" className="text-gray-600 border-b-4">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
