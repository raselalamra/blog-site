import img from "../../img/instagram/insta1.jpg";
import img2 from "../../img/instagram/insta2.jpg";
import img3 from "../../img/instagram/insta3.jpg";
import img4 from "../../img/instagram/insta4.jpg";
import img5 from "../../img/instagram/insta5.jpg";
import img6 from "../../img/instagram/insta6.jpg";

const Instagrams = () => {
  return (
    <div className="m-8 cursor-pointer">
      <h1 className="text-xl mb-4 text-gray-600">INSTAGRAM POSTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </div>
  );
};

export default Instagrams;
