import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import deal from "../assets/deal-bg.jpg";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div class="w-full lg:px-20 px-5 py-[80px]">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="w-full h-[300px] rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3 aos-init aos-animate"
        style={{ backgroundImage: `url(${deal})` }}
      >
        <h1 class="text-themeyellow text-xl font-semibold">
          Every day shopping
        </h1>
        <h1 class="text-white font-bold text-[42px] leading-[50px] text-center">
          Deal of the Day
        </h1>
        <button class="bg-themeyellow hover:bg-white text-black font-semibold px-8 py-3 rounded-lg mt-8">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Banner;
