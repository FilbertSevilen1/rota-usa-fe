import "../css/background.css";
import { Carousel } from "flowbite-react";
import React, { useEffect } from "react";
import WheelsEditor from "../components/WheelsEditor";

import banner1 from '../assets/dummy/banner/banner1.webp'
import banner2 from '../assets/dummy/banner/banner2.webp'
import banner3 from '../assets/dummy/banner/banner3.webp'
import ProductCard from "../components/ProductCard";
import SectionProduct from "../components/SectionProduct";

function Dashboard() {
  return (
    <div className="w-full flex flex-col section-wheels-background bg-scroll">
      <Carousel slide={false} className="h-96 md:h-[91.5vh] bg-black shadow-2xl">
        <div className="flex h-full items-center justify-center bg-black">
          <img src={banner1} className="w-full h-full cover"></img>
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <img src={banner2} className="w-full h-full cover"></img>
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <img src={banner3} className="w-full h-full cover"></img>
        </div>
      </Carousel>
      <div className="w-full mt-24 mb-8 flex flex-col items-center">
        <div className="w-11/12 md:w-10/12 flex justify-start">
          <div
            className="text-white mb-8 text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Car & Wheels Editor
          </div>
        </div>
        <WheelsEditor></WheelsEditor>
      </div>

      <div className="w-full mt-16 mb-8 flex flex-col items-center" data-aos="fade-up" data-aos-once="true">
        <div className="w-11/12 md:w-10/12 flex flex-col justify-start">
          <div
            className="text-white mb-8 text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Our Products
          </div>
          <SectionProduct>

          </SectionProduct>
        </div>
      </div>
      {/* <div className="w-full mt-16 mb-8 flex flex-col items-center">
        <div className="w-11/12 md:w-10/12 flex flex-col justify-start">
          <div
            className="text-white mb-8 text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Why Rota Wheels?
          </div>
        </div>
      </div>
      <div className="w-full mt-16 mb-8 flex flex-col items-center">
        <div className="w-11/12 md:w-10/12 flex flex-col justify-start">
          <div
            className="text-white mb-8 text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Contact Us!
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Dashboard;