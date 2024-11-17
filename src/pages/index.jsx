import "../css/background.css";
import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import WheelsEditor from "../components/WheelsEditor";

import banner1 from "../assets/dummy/banner/banner1.webp";
import banner2 from "../assets/dummy/banner/banner2.webp";
import banner3 from "../assets/dummy/banner/banner3.webp";
import banner4 from "../assets/dummy/banner/banner4.webp";
import banner5 from "../assets/about/carrota.webp";
import banner6 from "../assets/about/rota14.jpg";

import gallery1 from "../assets/about/rota22.webp";
import gallery2 from "../assets/about/rota2.webp";
import gallery3 from "../assets/about/rotadriver.webp";
import gallery4 from "../assets/dummy/banner/banner1.webp";
import gallery5 from "../assets/about/rota3.webp";
import gallery6 from "../assets/about/rota4.webp";
import gallery7 from "../assets/about/rota5.webp";
import gallery8 from "../assets/about/rota6.webp";
import gallery9 from "../assets/about/rota7.webp";
import gallery10 from "../assets/about/rota8.webp";
import gallery11 from "../assets/about/rota9.webp";
import gallery12 from "../assets/about/rota10.webp";
import gallery13 from "../assets/about/rota11.webp";
import gallery14 from "../assets/about/rota12.webp";
import gallery15 from "../assets/about/rota13.jpg";
import gallery16 from "../assets/about/rota24.jpg";
import gallery17 from "../assets/about/rota16.jpg";
import gallery18 from "../assets/about/rota28.jpg";
import gallery19 from "../assets/about/rota17.jpg";
import gallery20 from "../assets/about/rota18.jpg";
import gallery21 from "../assets/about/rota19.jpg";
import gallery22 from "../assets/about/rota20.jpg";

import video1 from "../assets/video/video1.mp4"

import ProductCard from "../components/ProductCard";
import SectionProduct from "../components/SectionProduct";
import Heading from "../components/base/Heading";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [imageDetails, setImageDetails] = useState(true);
  return (
    <div className="w-full flex flex-col page-background bg-scroll">
      <Carousel
        data-aos="fade-up"
        data-aos-once="true"
        slide={false}
        className="h-96 md:h-[91.5vh] bg-black shadow-2xl"
      >
         <div className="flex h-full items-center justify-center bg-black">
          <img
            loading="lazy"
            src={banner6}
            className="w-full h-full object-contain xl:object-cover object-bottom"
          ></img>
        </div>
         <div className="flex h-full items-center justify-center bg-black">
          <img
            loading="lazy"
            src={gallery12}
            className="w-full h-full object-contain xl:object-cover "
          ></img>
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <img
            loading="lazy"
            src={gallery12}
            className="w-full h-full object-contain xl:object-cover "
          ></img>
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <img
            loading="lazy"
            src={banner1}
            className="w-full h-full object-contain xl:object-cover "
          ></img>
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <img
            loading="lazy"
            src={gallery9}
            className="w-full h-full object-contain xl:object-cover "
          ></img>
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <img
            loading="lazy"
            src={banner4}
            className="w-full h-full object-contain xl:object-cover "
          ></img>
        </div>
        <div className="flex h-full items-center justify-center bg-black">
          <img
            loading="lazy"
            src={banner5}
            className="w-full h-full object-contain xl:object-cover "
          ></img>
        </div>
      </Carousel>
      <div className="w-full mt-24 mb-8 flex flex-col items-center">
        <div className="w-11/12 md:w-10/12 flex justify-start">
          <Heading title={"Car & Wheels Editor"}></Heading>
        </div>
        <WheelsEditor></WheelsEditor>
      </div>

      <div
        className="w-full mt-16 mb-8 flex flex-col items-center"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="w-11/12 md:w-10/12 flex flex-col justify-start">
          <Heading title={"Our Products"}></Heading>
          <SectionProduct></SectionProduct>
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={() => navigate("/wheels")}
              className="transition-all hover:scale-105 active:scale-100 card-background w-full sm:w-64 p-4 font-bold text-white text-xl sm:text-2xl rounded-xl border-[0.5px] hover:border-gray-400"
            >
              See More
            </button>
          </div>
        </div>
      </div>
      
      <div className="w-full mt-16 mb-8 flex flex-col items-center">
        <div className="w-11/12 md:w-10/12 flex flex-col justify-start">
          <div
            className="text-white text-4xl md:text-6xl font-bold"
            data-aos="fade-up"
            data-aos-once="true"
          >
            Gallery
          </div>
          <Carousel
            data-aos="fade-up"
            data-aos-once="true"
            slide={true}
            className="h-[480px] hidden xl:block"
            indicators={false}
          >
            <div className="w-full flex gap-8 justify-between">
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery1}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery19}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery17}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery18}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery16}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery20}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery21}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery22}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery11}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery12}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery13}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery14}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery7}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery8}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery9}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery10}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery15}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery2}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery3}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery4}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery5}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery6}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery7}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="md:w-[360px] md:h-[360px] shadow-md rounded-2xl  transition-all hover:scale-[105%]">
                <img
                  src={gallery8}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
          </Carousel>
          <Carousel
            data-aos="fade-up"
            data-aos-once="true"
            slide={true}
            className="h-[340px] hidden sm:block xl:hidden"
            indicators={false}
          >
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery1}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery19}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery17}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery18}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery16}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery20}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery21}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery22}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery13}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery14}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery11}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery12}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery9}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery10}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery15}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery2}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery3}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery4}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery5}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery6}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery7}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-1/2 h-[250px] shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery8}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
          </Carousel>
          <Carousel
            data-aos="fade-up"
            data-aos-once="true"
            slide={true}
            className="h-[340px] block sm:hidden "
            indicators={false}
          >
             <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery1}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery19}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery17}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery18}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery16}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery20}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery21}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery22}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery9}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery10}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery11}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery12}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery13}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery14}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery15}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery2}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery3}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery4}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery5}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery6}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery7}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
            <div className="w-full flex gap-8 justify-between">
              <div className="w-full h-[250px] bg-white shadow-md rounded-2xl transition-all hover:scale-[105%]">
                <img
                  src={gallery8}
                  className="w-full h-full object-cover rounded-2xl"
                ></img>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="w-full mt-16 mb-8 flex flex-col items-center">
          <div className="w-11/12 md:w-10/12 flex flex-col justify-center">
            <div
              className="text-white text-4xl md:text-6xl font-bold"
              data-aos="fade-up"
              data-aos-once="true"
            >
              Videos
            </div>

            <div className="w-full md:w-[360px] mt-12">
              <video width="100%" height="480px" controls>
                <source src={video1} type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
