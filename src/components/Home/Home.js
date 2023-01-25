import React from "react";
import img from "../../img/letest-post/side.jpg";
import Banner from "../Banner/Banner";
import Instagrams from "../Instagram/Instagrams";
import LetestPost from "../LetestPost/LetestPost";
import NewsLetter from "../NewesLetter/NewsLetter";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="w-50 h-100 mt-16 m-8">
          <img className="mt-16" src={img} alt="" />
          <p className="mt-8 text-left m-4 text-gray-800">
            More off this less hello salamander lied porpoise much over tightly
            circa horse taped so innocuously outside crud mightily rigorous
            negative one inside gorilla and drew humbly shot tortoise inside
            opaquely. Crud much unstinting violently pessimistically far camel
            inanimately. <br /> <br />
            Coquettish darn pernicious foresaw therefore much amongst
            lingeringly shed much due antagonistically alongside so then more
            and about turgid wrote so stunningly this that much slew.
            <br /> <br />
            <p className="text-gray-500">
              Craft beer elit seitan exercitation, photo booth et 8-bit kale
              chips proident chillwave deep v laborum. Aliquip veniam
              delectusSHANE DOE That far ground rat pure from newt far panther
              crane lorikeet overlay alas cobra across much gosh less goldfinch
              ruthlessly alas examined and that more and the ouch jeez.
            </p>
            <br />
            That far ground rat pure from newt far panther crane lorikeet
            overlay alas cobra across much gosh less goldfinch ruthlessly alas
            examined and that more and the ouch jeez.
          </p>
        </div>

        <NewsLetter></NewsLetter>
        <Instagrams></Instagrams>
        <LetestPost></LetestPost>
      </div>
    </>
  );
};

export default Home;
