import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import gift from "../assets/gift.png";
import payment from "../assets/payment.png";
import refunds from "../assets/return.png";
import shipping from "../assets/shipping.png";

const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className="w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10">
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={shipping} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold ">Shipping</h1>
        <p className="text-gray-500 text-[17px]">
          We deliver your <span className="text-themepurple">products</span>  to your doorstep
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={payment} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold ">Payment</h1>
        <p className="text-gray-500 text-[17px]">
          We deliver your products to your doorstep
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={refunds} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold ">Refunds</h1>
        <p className="text-gray-500 text-[17px]">
          We deliver your products to your doorstep
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="flex flex-col justify-center items-center gap-2"
      >
        <img src={gift} alt="" className="mb-[20px] w-[60px]" />
        <h1 className="text-xl text-black font-semibold ">Gifts</h1>
        <p className="text-gray-500 text-[17px]">
          We deliver your products to your doorstep
        </p>
      </div>
      
    
    </div>
  );
};

export default Services;
