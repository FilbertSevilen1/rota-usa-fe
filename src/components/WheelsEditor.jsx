import "../css/background.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";

import ErrorMessage from "../composables/ErrorMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./base/Loading";

const API_URL = process.env.REACT_APP_API_URL;
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;
function WheelsEditor() {
  const [loading, setLoading] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 550; // Adjust this value based on your needs
      const thresholdEnd = 1450;
      // Check if scroll position is beyond the threshold
      setIsSticky(
        scrollPosition > threshold &&
          scrollPosition < thresholdEnd &&
          window.innerWidth < 768
      );
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    getAllBrands();
    getAllCars();
    getAllWheels();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getAllWheels = () => {
    setLoading(true);
    Axios.get(API_URL + "/wheel")
      .then((res) => {
        setListWheel(res.data);
        setWheel(res.data[0].wheel_details[0].wheel_details_image);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getAllBrands = () => {
    try {
      setLoading(true);
      Axios.get(API_URL + "/brand")
        .then((item) => {
          if (item.data) {
            setListBrand(item.data);
            setBrand(item.data[0]);
            console.log(brand);
          } else {
            toast.error("Failed to Get Data", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
              theme: "dark",
            });
          }
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false);
        });
    } catch (error) {
      toast.error(error, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const getAllCars = () => {
    setLoading(true);
    try {
      Axios.get(API_URL + "/car")
        .then((item) => {
          if (item.data) {
            setSelectedCar(item.data[0]);
            setListCar(item.data);
            setCar(item.data[0].car_image[0].car_color_image);

            setCarImage(item.data[0], item.data[0], 0);
          } else {
            toast.error("Failed to Get Data", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              progress: undefined,
              theme: "dark",
            });
          }
          setLoading(false);
        })
        .catch((error) => {
          toast.error(error, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false);
        });
    } catch (error) {
      toast.error(error, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
    }
  };

  const [listBrand, setListBrand] = useState([]);
  const [listWheel, setListWheel] = useState([]);
  const [listCar, setListCar] = useState([]);
  const [brand, setBrand] = useState("");

  const [car, setCar] = useState("");
  const [wheel, setWheel] = useState("");
  const [selectedCar, setSelectedCar] = useState(listCar[0]);
  const [selectedCarTemplate, setSelectedCarTemplate] = useState("");

  const [selectedWheel, setSelectedWheel] = useState(listWheel[0]);
  const [type, setType] = useState(0);
  const [menu, setMenu] = useState(0);

  const setCarBrand = (item) => {
    setBrand(item);
    setSelectedCar("");
  };

  const setCarImage = (car, type, color) => {
    setCar(car.car_details[color].car_color_image);
    setSelectedCar(car);
    setSelectedCarTemplate(car);
    setType(type);
  };

  const setWheelImage = (img, wheel) => {
    setWheel(img);
    setSelectedWheel(wheel);
  };

  const generateWheelList = () => {
    if (listWheel) {
      return listWheel.map((item, index) => {
        return (
          <div
            key={index}
            className={`transition-all flex flex-col items-center mx-0 md:mx-2`}
          >
            <button
              className={`${
                item == selectedWheel
                  ? "scale-105 bg-gray-300"
                  : "scale-100 bg-white"
              } my-4 shadow-md rounded-xl transition-all hover:scale-105 active:scale-95 font-bold`}
              onClick={() =>
                setWheelImage(item.wheel_details[0].wheel_details_image, item)
              }
            >
              <img
                loading="lazy"
                src={PUBLIC_URL + item.wheel_details[0].wheel_details_image}
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl"
              ></img>
            </button>
            <div className="text-sm text-center md:text-lg font-bold w-16 md:w-20">
              {item.wheel_name}
            </div>
          </div>
        );
      });
    }
  };
  const generateWheelDetailList = () => {
    if (selectedWheel) {
      return selectedWheel.wheel_details.map((item, index) => {
        return (
          <div
            key={index}
            className={`transition-all flex flex-col items-center mx-0 md:mx-2`}
          >
            <button
              className={`${
                item.wheel_details_image == wheel
                  ? "scale-105 bg-gray-300"
                  : "scale-100 bg-white"
              } my-4 shadow-md rounded-xl transition-all hover:scale-105 active:scale-95 font-bold`}
              onClick={() =>
                setWheelImage(item.wheel_details_image, selectedWheel)
              }
            >
              <img
                loading="lazy"
                src={PUBLIC_URL + item.wheel_details_image}
                className="w-20 h-20 md:w-20 md:h-20 rounded-xl"
              ></img>
            </button>
            <div className="text-sm text-center md:text-md font-bold w-20 md:w-20">
              {/* {item.wheel_name} */}
            </div>
          </div>
        );
      });
    }
  };

  const generateBrandList = () => {
    if (listBrand) {
      return listBrand.map((item, index) => {
        return (
          <button
            key={index}
            className={`${
              item == brand ? "scale-105 bg-gray-300" : "scale-100 bg-white"
            } w-16 h-16 md:w-12 md:h-12 mb-1 shadow-md rounded-xl transition-all active:scale-95 font-bold flex justify-center items-center `}
            onClick={() => setCarBrand(item)}
          >
            <img
              loading="lazy"
              src={PUBLIC_URL + item.brand_image}
              className="w-14 h-14 md:w-10 md:h-10 contain"
            ></img>
          </button>
        );
      });
    }
  };

  const generateCarList = () => {
    if (listCar) {
      return listCar.map((car, index) => {
        if (car.brand_id == brand.brand_id)
          return (
            <button
              key={index}
              className="my-2 shadow-md rounded-xl transition-all active:scale-95 font-bold bg-black"
              onClick={() => setCarImage(car, car.carTemplate, 0)}
            >
              <img
                loading="lazy"
                src={PUBLIC_URL + car.car_image[0].car_color_image}
                // src={car.car_image}
                className="w-18 h-14 xl:w-16 xl:h-12 rounded-xl object-cover"
              ></img>
            </button>
          );
      });
    }
  };

  const generateColorList = () => {
    if (selectedCar) {
      return selectedCar.car_details.map((car, index) => {
        return (
          <button
            key={index}
            className="mt-1 shadow-md rounded-xl transition-all active:scale-95 font-bold bg-black"
            onClick={() =>
              setCarImage(selectedCar, selectedCar.carTemplate, index)
            }
          >
            <img
              loading="lazy"
              src={PUBLIC_URL + car.car_color_image}
              // src={car}
              className="w-14 h-14 xl:w-12 xl:h-12 rounded-xl object-cover"
            ></img>
          </button>
        );
      });
    }
  };

  const generateCarImage = () => {
    const template = [
      {
        car_id: 1,
        wheelTemplate1:
          "mt-[-126.5px] xl:mt-[-253px] w-[3.3rem] h-[4.45rem] ml-[11px] xl:w-[6.6rem] xl:h-[8.9rem] xl:ml-[22px] rounded-full relative z-10 bg-gray-950",
        wheelTemplate2:
          "mt-[-116px] xl:mt-[-232px] w-[4.4rem] h-[5.2rem] mr-[151.5px] xl:w-[8.8rem] xl:h-[10.4rem] xl:mr-[303px] rounded-full relative z-10 bg-gray-950",
      },
      {
        car_id: 2,
        wheelTemplate1:
          "mt-[-150px] xl:mt-[-300px] w-[3.3rem] h-[5.5rem] ml-[0px] xl:w-[6.6rem] xl:h-[11rem] xl:ml-[0px] rounded-full relative z-10 bg-gray-950",
        wheelTemplate2:
          "mt-[-130px] xl:mt-[-260px] w-[4.6rem] h-[6.45rem] mr-[207px] xl:w-[9.2rem] xl:h-[12.9rem] xl:mr-[414px] rounded-full relative z-10 wheels bg-gray-950",
      },
      {
        car_id: 3,
        wheelTemplate1:
          "mt-[-125px] xl:mt-[-250px] w-[3.3rem] h-[4.5rem] ml-[25px] xl:w-[6.6rem] xl:h-[9rem] xl:ml-[50px] rounded-full relative z-10 bg-gray-950",
        wheelTemplate2:
          "mt-[-109px] xl:mt-[-218px] w-[4.6rem] h-[4.8rem] mr-[117px] xl:w-[9.2rem] xl:h-[9.6rem] xl:mr-[234px] rounded-full relative z-10 bg-gray-950",
      },
      {
        car_id: 4,
        wheelTemplate1:
          "mt-[-136px] xl:mt-[-272px] w-[2.8rem] h-[5.5rem] ml-[0px] xl:w-[5.6rem] xl:h-[11rem] xl:ml-[0px] rounded-full relative z-10 bg-gray-950",
        wheelTemplate2:
          "mt-[-126px] xl:mt-[-252px] w-[4.45rem] h-[6.25rem] mr-[208px] xl:w-[8.9rem] xl:h-[12.5rem] xl:mr-[416px] rounded-full relative z-10 bg-gray-950",
      },
      {
        car_id: 5,
        wheelTemplate1:
          "mt-[-108.5px] xl:mt-[-217px] w-[2.6rem] h-[3.7rem] ml-[49px] xl:w-[5.2rem] xl:h-[7.4rem] xl:ml-[98px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-108px] xl:mt-[-216px]  w-[4.2rem] h-[5rem] mr-[158px]  xl:w-[8.4rem] xl:h-[10rem] xl:mr-[316px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 6,
        wheelTemplate1:
          "mt-[-126px] xl:mt-[-252px] w-[2.9rem] h-[5.5rem] ml-[40px] xl:w-[5.8rem] xl:h-[11rem] xl:ml-[80px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-126.5px] xl:mt-[-253px] w-[4.45rem] h-[6.25rem] mr-[156.5px] xl:w-[8.9rem] xl:h-[12.5rem] xl:mr-[313px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 7,
        wheelTemplate1:
          "mt-[-123px] xl:mt-[-246px] w-[2.2rem] h-[4.0rem] ml-[42.5px] xl:w-[4.4rem] xl:h-[8.0rem] xl:ml-[85px] rounded-full relative  wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-110px] xl:mt-[-220px] w-[3.6rem] h-[5.2rem] mr-[169px] xl:w-[7.2rem] xl:h-[10.4rem] xl:mr-[338px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 8,
        wheelTemplate1:
          "mt-[-130px] xl:mt-[-260px] w-[2.4rem] h-[4.7rem] ml-[17.5px] xl:w-[4.8rem] xl:h-[9.4rem] xl:ml-[35px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-121px] xl:mt-[-242px] w-[3.4rem] h-[5.4rem] mr-[225px] xl:w-[6.8rem] xl:h-[10.8rem] xl:mr-[450px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 9,
        wheelTemplate1:
          "mt-[-99px] xl:mt-[-198px] w-[2.4rem] h-[3.7rem] ml-[58px]  xl:w-[4.8rem] xl:h-[7.4rem] xl:ml-[116px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-90px] xl:mt-[-180px] w-[3.7rem] h-[4.5rem] mr-[177px]  xl:w-[7.4rem] xl:h-[9rem] xl:mr-[354px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 10,
        wheelTemplate1:
          "mt-[-106px] xl:mt-[-212px] w-[1.7rem] h-[3.4rem] ml-[65px] xl:w-[3.4rem] xl:h-[6.8rem] xl:ml-[130px] rounded-full relative  wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-100px] xl:mt-[-200px] w-[3.7rem] h-[4.7rem] mr-[197px] xl:w-[7.4rem] xl:h-[9.4rem] xl:mr-[394px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 11,
        wheelTemplate1:
          "mt-[-147px] xl:mt-[-294px] w-[2rem] h-[4.3rem] ml-[39px] xl:w-[4rem] xl:h-[8.6rem] xl:ml-[78px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-142px] xl:mt-[-284px] w-[3.5rem] h-[6rem] mr-[226px] xl:w-[7.0rem] xl:h-[12rem] xl:mr-[452px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 12,
        wheelTemplate1:
          "mt-[-101.5px] xl:mt-[-203px] w-[2.2rem] h-[2.4rem] ml-[91.5px] xl:w-[4.4rem] xl:h-[4.8rem] xl:ml-[183px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-87px] xl:mt-[-174px] w-[2.7rem] h-[2.8rem] mr-[128px] xl:w-[5.4rem] xl:h-[5.6rem] xl:mr-[256px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 13,
        wheelTemplate1:
          "mt-[-123px] xl:mt-[-246px] w-[2.2rem] h-[4.2rem] ml-[21.5px] xl:w-[4.4rem] xl:h-[8.4rem] xl:ml-[43px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-103px] xl:mt-[-206px] w-[3.6rem] h-[5.6rem] mr-[205px] xl:w-[7.2rem] xl:h-[11.2rem] xl:mr-[410px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 14,
        wheelTemplate1:
          "mt-[-81px] xl:mt-[-162px] w-[3.35rem] h-[3.8rem] ml-[62.5px] xl:w-[6.7rem] xl:h-[7.6rem] xl:ml-[125px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-69px] xl:mt-[-138px] w-[3.9rem] h-[4.1rem] mr-[121px] xl:w-[7.8rem] xl:h-[8.2rem] xl:mr-[242px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 15,
        wheelTemplate1:
          "mt-[-90px] xl:mt-[-180px] w-[2.1rem] h-[3.6rem] ml-[70px] xl:w-[4.2rem] xl:h-[7.2rem] xl:ml-[140px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-84px] xl:mt-[-168px] w-[3.4rem] h-[4.1rem] mr-[202.5px] xl:w-[6.8rem] xl:h-[8.2rem] xl:mr-[405px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 16,
        wheelTemplate1:
          "mt-[-109px] xl:mt-[-218px] w-[2.1rem] h-[3.6rem] ml-[55px] xl:w-[4.2rem] xl:h-[7.2rem] xl:ml-[110px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-114px] xl:mt-[-228px] w-[3.2rem] h-[4.1rem] mr-[212.5px] xl:w-[6.4rem] xl:h-[8.2rem] xl:mr-[415px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 17,
        wheelTemplate1:
          "mt-[-155px] xl:mt-[-310px] w-[2.1rem] h-[3.6rem] ml-[70px] xl:w-[4.2rem] xl:h-[7.2rem] xl:ml-[140px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-146px] xl:mt-[-292px] w-[5.7rem] h-[6.3rem] mr-[172.5px] xl:w-[11.4rem] xl:h-[12.6rem] xl:mr-[345px] rounded-full relative wheels bg-gray-950",
      },
      {
        car_id: 18,
        wheelTemplate1:
          "mt-[-125px] xl:mt-[-250px] w-[3.9rem] h-[4.2rem] ml-[218px] xl:w-[7.8rem] xl:h-[8.4rem] xl:ml-[436px] rounded-full relative wheels bg-gray-950",
        wheelTemplate2:
          "mt-[-139px] xl:mt-[-278px] w-[2.0rem] h-[3.5rem] mr-[60px] xl:w-[4.0rem] xl:h-[7rem] xl:mr-[120px] rounded-full relative wheels bg-gray-950",
      },
    ];

    let printTemplate = "";

    template.forEach((item) => {
      if (item.car_id == selectedCarTemplate.car_id) {
        printTemplate = item;
      }
    });
    return (
      <div className="">
        <img
          loading="lazy"
          src={PUBLIC_URL + car}
          // src={car}
          className="w-full car shadow-md rounded-2xl z-30 relative"
        ></img>
        <div className="flex justify-between h-auto mx-auto relative">
          <div>
            <img
              loading="lazy"
              src={PUBLIC_URL + wheel}
              className={printTemplate.wheelTemplate1}
            ></img>
          </div>
          <div>
            <img
              loading="lazy"
              src={PUBLIC_URL + wheel}
              className={printTemplate.wheelTemplate2}
            ></img>
          </div>
        </div>
      </div>
    );

    // default:
    //   break;
    // }
  };

  return (
    <div className="text-white px-4 md:px-0  w-11/12 md:w-10/12 w-full flex flex-col overflow-y-hidden overflow-x-hidden mx-auto  wheels-background rounded-xl">
      <ToastContainer />
      {loading ? (
        <div className="w-48 h-48 mx-auto my-12">
          <Loading></Loading>
        </div>
      ) : (
        <>
          <div className="w-full flex flex-col xl:flex-row items-center md:items-center rounded-xl justify-between shadow-lg">
            <div
              data-aos="fade md:fade-right"
              data-aos-once="true"
              className={`${
                isSticky ? "fixed top-16 z-40 md:flex md:top-0 md:z-10" : ""
              } transition-all w-[450px] xl:w-[900px] md:relative shrink-0 md:mr-4 `}
            >
              {generateCarImage()}
            </div>
            <div
              data-aos="fade md:fade-left"
              data-aos-once="true"
              className={`${
                isSticky ? "mt-[300px] md:mt-0" : ""
              }  w-full h-fit flex flex-col p-3 md:p-3  mt-8 md:mt-0`}
            >
              <div className={`text-xl md:text-2xl font-bold mb-4`}>
                Select Your Favorite Car & Wheels
              </div>
              <div className="gap-2 xl:gap-3 flex justify-center flex-wrap md:justify-start border-b-2 border-gray-400 p-2">
                {generateBrandList()}
              </div>
              <div className="gap-2 xl:gap-3 flex justify-center flex-wrap md:justify-start border-b-2 border-gray-400 p-2">
                {generateCarList()}
              </div>
              <div className="gap-2 xl:gap-3 flex justify-center flex-wrap md:justify-start border-gray-200 p-2">
                {generateColorList()}
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-once="true" className="w-full p-2">
            {/* <div className="text-2xl md:text-4xl font-bold mb-4">
              Our Wheels
            </div> */}
            <div className="gap-2 flex overflow-x-scroll justify-start pb-2">
              {generateWheelList()}
            </div>
            <div className="gap-2 flex overflow-x-scroll justify-start">
              {generateWheelDetailList()}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default WheelsEditor;
