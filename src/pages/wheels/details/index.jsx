import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Heading from "../../../components/base/Heading";
import SubHeading from "../../../components/base/SubHeading";
import SectionProduct from "../../../components/SectionProduct";
import Axios from "axios";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../../components/base/Loading";

const API_URL = process.env.REACT_APP_API_URL;
const PUBLIC_URL = process.env.REACT_APP_PUBLIC_URL;
function WheelDetails() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [wheelId, setWheelId] = useState(location.pathname.substring(8));
  // Dummy
  const [activeWheel, setActiveWheel] = useState(0);
  const [listWheel, setListWheel] = useState([
    {
      wheel_id: 1,
      wheel_name: "",
      wheel_details: [
        {
          wheel_details_id: 1,
          wheel_details_name: "",
          wheel_details_image: "",
        },
      ],
      size_details: [],
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDataWheelById();
  }, []);

  const getDataWheelById = () => {
    setLoading(true);
    const body = {
      wheel_id: wheelId,
    };

    axios
      .post(API_URL + `/wheel`, body)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setListWheel(res.data);
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
        toast.error("Failed to Get Data", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false);
      });
  };

  const generateListWheel = () => {
    if (listWheel[0].wheel_details) {
      return listWheel[0].wheel_details.map((item, index) => {
        return (
          <div
            key={index}
            className="min-w-16 h-16 cursor-pointer bg-white rounded-2xl hover:scale-105 active:scale-100 transition-all"
            onClick={() => setActiveWheel(index)}
          >
            <img
              className="min-w-16 h-16"
              src={PUBLIC_URL + item.wheel_details_image}
              alt={PUBLIC_URL + item.wheel_details_name}
              title={PUBLIC_URL + item.wheel_details_name}
            ></img>
          </div>
        );
      });
    }
  };

  const generateTableBolt = (item) => {
    console.log(item.bolt_details);
    if (item.bolt_details) {
      return item.bolt_details.map((bolt, index) => {
        return (
          <div className="w-full border-[1px] border-white py-2">
            {bolt.bolt_name}
          </div>
        );
      });
    }
  };

  const generateTableOffset = (item) => {
    if (item.offset_details) {
      return item.offset_details.map((offset, index) => {
        return (
          <div className="w-full flex">
            <div className="w-1/2 border-[1px] border-white py-2">
              {offset.offset_name}
            </div>
            <div className="w-1/2">{generateTableBolt(offset)}</div>
          </div>
        );
      });
    }
  };

  const generateTableBody = () => {
    const data = listWheel[0] || "";
    if (data.size_details) {
      return data.size_details.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full text-lg md:text-xl flex text-white"
          >
            <div className="w-1/3 text-center border-[1px] border-white py-2">
              {item.size_name}
            </div>
            <div className="w-2/3 text-center ">
              {generateTableOffset(item)}
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className="w-full page-background flex justify-center">
      <div
        className="w-full mt-8 md:mt-0 mb-8 flex flex-col items-center "
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="w-11/12 md:w-10/12 flex flex-col items-center md:items-start justify-start rounded-2xl mt-12">
          <Heading title={listWheel[0].wheel_name}></Heading>
          <div className="w-full flex flex-col xl:flex-row justify-between mt-4 gap-8">
            <div className="w-full flex flex-col items-center xl:w-1/4">
              {loading ? (
                <div className="w-48 h-48 my-12 mx-auto">
                  <Loading></Loading>
                </div>
              ) : (
                <>
                  <img
                    className="w-48 xl:w-full mb-8 xl:mb-4 bg-gray-300 rounded-xl"
                    src={
                      PUBLIC_URL +
                      listWheel[0].wheel_details[activeWheel]
                        .wheel_details_image
                      // listWheel[wheelId - 1].wheel_details[activeWheel].wheel_details_image
                    }
                    alt={
                      PUBLIC_URL +
                      listWheel[0].wheel_details[activeWheel]
                        .wheel_details_image
                      // listWheel[wheelId - 1].wheel_details[activeWheel].wheel_details_name
                    }
                    title={
                      PUBLIC_URL +
                      listWheel[0].wheel_details[activeWheel]
                        .wheel_details_image
                      // listWheel[wheelId - 1].wheel_details[activeWheel].wheel_details_name
                    }
                  ></img>
                  <div className="wheels-background rounded-xl px-2 flex justify-start w-full overflow-x-scroll overflow-y-hidden py-4 gap-4">
                    {generateListWheel()}
                  </div>
                </>
              )}
            </div>
            <div className="w-full flex flex-col xl:w-3/4 wheels-background rounded-xl text-white p-8">
              <div className="text-lg sm:text-2xl md:text-4xl wrapword">
                <div className="gap-2 flex">
                  <p>Wheel Color:</p>
                  <b>
                    {
                      listWheel[0].wheel_details[activeWheel].wheel_details_name
                      // listWheel[wheelId - 1].wheel_details[activeWheel].wheel_details_name
                    }
                  </b>
                </div>
              </div>
              <div className="w-full my-8">
                <div className="w-full rounded-xl p-4">
                  {/* Headers */}
                  <div className="w-full text-xl md:text-2xl flex text-white font-bold">
                    <div className="w-1/3 text-center border-[1px] border-white py-4">
                      Size
                    </div>
                    <div className="w-1/3 text-center border-[1px] border-white py-4">
                      Offset
                    </div>
                    <div className="w-1/3 text-center border-[1px] border-white py-4">
                      Bolt Pattern
                    </div>
                  </div>
                  {/* Body */}
                  {generateTableBody()}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-12 mb-8">
            <SubHeading title="Related Products"></SubHeading>
            <SectionProduct curr={wheelId}></SectionProduct>
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
      </div>
    </div>
  );
}
export default WheelDetails;
