import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { picture, name, description, id } = blog;
  return (
    <div className="bg-slate-200 text-left">
      <div className="">
        <img src={picture} className="h-64 w-full" alt="" />
      </div>
      <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm">{description.slice(0, 120)}...</p>
        <p className="text-indigo-400 text-xl items-center md:mb-2 lg:mb-0">
          <small>
            <Link to={`/blog/${id}`}>Read more</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
