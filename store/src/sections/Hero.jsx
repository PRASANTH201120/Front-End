import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import dslr from "../assets/dslr.jpg";
import earbuds from '../assets/earbuds.jpg';
import headset from '../assets/headset.jpg';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div
      id="hero"
      className="w-full flex justify-center items-center lg:h-[800px] h-[600px]"
    >
      <Slider className="w-full h-full " {...settings}>



        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[500px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${dslr})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-x1"
            >
              Get upto 50% off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              {" "}
              DSLR <br /> camera
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-3xl"
            >
              Electronics{" "}
              <span className="text-themeyellow font-semibold">Gadget</span>{" "}
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-themeyellow px-6 py-2 rounded-lg text-black"
            >
              view collections
            </button>
          </div>
        </div>



        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[500px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${headset})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-x1"
            >
              Get upto 60% off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]"
            >
              {" "}
            wireless <br /> <span className="text-themeyellow font-semibold">headset</span>
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-3xl"
            >
              Electronics{" "}
              <span className="text-themeyellow font-semibold">Gadget</span>{" "}
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-themeyellow px-6 py-2 rounded-lg text-black"
            >
              view collections
            </button>
          </div>
        </div>



        <div>
          <div
            className="w-full lg:px-20 px-5 lg:h-[700px] h-[500px] flex flex-col justify-center items-start gap-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${earbuds})` }}
          >
            <h1
              data-aos="zoom-in"
              data-aos-delay="50"
              className="text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-x1"
            >
              Get upto 80% off
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white lg:text-[120px] text-[60px] uppercase font-bold lg:leading-[120px] leading-[70px]">{" "}wireless <br /> Earbuds</h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="100"
              className="text-white text-3xl"
            >
              Electronics{" "}
              <span className="text-themeyellow font-semibold">Gadget</span>{" "}
            </h1>
            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-themeyellow px-6 py-2 rounded-lg text-black"
            >
              view collections
            </button>
          </div>
        </div>
        

      </Slider>
      hero
    </div>
  );
};

export default Hero;
