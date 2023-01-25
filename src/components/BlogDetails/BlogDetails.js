import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();
  console.log(blog);
  const { name } = blog;

  return (
    <div>
      <h2>Name: {name}</h2>
    </div>
  );
};

export default BlogDetails;
