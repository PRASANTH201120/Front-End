import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';

const Header = () => {
    useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: "ease-in-out",
      });
  
      AOS.refresh();
    }, []);
  const [menu, setMenu] = useState("shop");

  return (
    <div className="flex justify-around items-center py-4 shadow-md">
      <div className="text-2xl font-bold text-gray-900">
        SHOPPER
      </div>

      <ul className="flex items-center space-x-12 text-lg font-medium text-gray-600">
        <li onClick={() => setMenu("shop")} className="flex flex-col items-center cursor-pointer">
          Shop {menu === "shop" && <hr className="w-3/4 border-none h-1 rounded bg-red-500 mt-1" />}
        </li>
        <li onClick={() => setMenu("About")} className="flex flex-col items-center cursor-pointer">
        About {menu === "About" && <hr className="w-3/4 border-none h-1 rounded bg-red-500 mt-1" />}
        </li>
        <li onClick={() => setMenu("Products")} className="flex flex-col items-center cursor-pointer">
          Products {menu === "Products" && <hr className="w-3/4 border-none h-1 rounded bg-red-500 mt-1" />}
        </li>
      </ul>

      <div>
        <button className="w-40 h-14 border border-gray-400 rounded-full text-gray-600 text-lg font-medium bg-white">
          Login
        </button>
      </div>
    </div>
  )
}

export default Header
