import React from "react";
import post from "../../img/letest-post/post.jpg";
import post2 from "../../img/letest-post/post2.jpg";
import post3 from "../../img/letest-post/post3.jpg";
import post4 from "../../img/letest-post/post4.jpg";

const LetestPost = () => {
  return (
    <div className="m-16">
      <h3 className="mb-4 text-xl text-gray-600">LATEST POSTS</h3>
      <div className="border cursor-pointer">
        <div className="flex gap-4 mb-6 m-4">
          <img className="w-20 h-20" src={post} alt="" />
          <div className="ml-4">
            <h4 className="text-xl">A Look Inside The Work Abdoe</h4>
            <p className="text-gray-500 ml-4">January 25, 2023</p>
          </div>
        </div>
        <div className="flex gap-4 mb-6 m-4">
          <img className="w-20 h-20" src={post2} alt="" />
          <div className="ml-4">
            <h4 className="text-xl">
              Newly Wed And Blissful Start of New Life
            </h4>
            <p className="text-gray-500 ml-4">January 21, 2023</p>
          </div>
        </div>
        <div className="flex gap-4 mb-6 m-4">
          <img className="w-20 h-20" src={post3} alt="" />
          <div className="ml-4">
            <h4 className="text-xl">Latest Style Ideas For Men in Fashion</h4>
            <p className="text-gray-500 ml-4">January 19, 2023</p>
          </div>
        </div>
        <div className="flex gap-4 mb-6 m-4">
          <img className="w-20 h-20" src={post4} alt="" />
          <div className="ml-4">
            <h4 className="text-xl">Clean And Colorful is in Vogue</h4>
            <p className="text-gray-500 ml-4">January 18, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetestPost;
