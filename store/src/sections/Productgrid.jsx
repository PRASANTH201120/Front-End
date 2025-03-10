import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md';
import { products } from "../export";

const Productgrid = () => {
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
      id="products"
      className="w-full 1g:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        className="text-themepurple text-x1 font-semibold"
      >
        Browse Collections
      </h1>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-black font-semibold text-[42px] leading-[50px] text-center"
      >
        Trending Products
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-delay="300"
        className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10 aos-init aos-animate"
      >
        {
          products.map((item , index) => (
            <div id="product-box" key={index} className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-lg cursor-pointer relative" >
              <img src={item.img} alt=""/>
              <div id="icons" className="flex justify-center items-center gap-3 absolute top-[20px]" >
              <div className="bg-themepurple hover:bg-themeyellow p-3 rounded-full hover:text-black text-white" >
                  <MdOutlineRemoveRedEye/>
                </div>
                <div className="bg-themepurple hover:bg-themeyellow p-3 rounded-full hover:text-black text-white" >
                  <FaRegHeart/>
                </div>
                <div className="bg-themepurple hover:bg-themeyellow p-3 rounded-full hover:text-black text-white" >
                  <MdAddShoppingCart/>
                </div>
              </div>

              <h1 className="text-lg text-green-500 font-semibold">{item.category}</h1>
              <h1 className="text-xl text-black-500 font-semibold">{item.name}</h1>
              <h1 className="text-lg text-themepurple font-semibold">{item.price}</h1>

              <div className="w-full mt-2">
                <hr />
                  <div className="flex justify-between items-center gap-2 mt-3">
                    <div className="flex justify-center items-center gap-2">
                      <FaStar className="text-themepurple" />
                      <FaStar className="text-themepurple" />
                      <FaStar className="text-themepurple" />
                      <FaStar className="text-themepurple" />
                      <FaStar className="text-themepurple" />
                    </div>
                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-[13px] font-semibold">View Details</button>

                </div>
              </div>

            </div>
            
          ))
          }
      </div>
      <button data-aos='zoom-in' data-aos-delay='400' className='bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]'> View More</button>
    </div>
  );
};

export default Productgrid;
