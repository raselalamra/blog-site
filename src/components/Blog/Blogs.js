import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl text-orange-400">Our Travel Resource</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 m-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
