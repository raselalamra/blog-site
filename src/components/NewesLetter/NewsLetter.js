import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";

const NewsLetter = () => {
  return (
    <div>
        <About/>
        <Contact/>
      <div className="border bg-gray-100 mt-8 p-4 m-16">
        <h2 className="text-xl mt-4 text-slate-600">NEWSLETTER</h2>
        <p className="mt-4 text-gray-400">
          Enter your email address below to subscribe to my newsletter!!
        </p>
        <input
          className="p-4 m-4"
          type="email"
          name=""
          id=""
          placeholder="Your email address..."
          required
        />
        <button className="bg-red-300 text-white p-2 m-4">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default NewsLetter;
