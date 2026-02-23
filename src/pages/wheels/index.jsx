import React, { useEffect, useState } from "react";
import Heading from "../../components/base/Heading";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard";

import Axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../components/base/Loading";
const API_URL = process.env.REACT_APP_API_URL;

function Wheels() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [listWheel, setListWheel] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [sortInput, setSortInput] = useState("");

  useEffect(() => {
    getDataAllWheels();
  }, []);

  const getDataAllWheels = () => {
    setLoading(true);
    let query = "";
    if (searchInput || filterInput || sortInput) {
      query = "?";
    }

    if (searchInput) {
      query = query + "_name=" + searchInput;
    }

    if (filterInput) {
      if (searchInput) {
        query += "&";
      }
      query += query + "_filter=" + filterInput;
    }

    Axios.get(API_URL + "/wheel" + query)
      .then((res) => {
        if (res.data) {
          setListWheel(res.data);
          getMaxPage(res.data);
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

  const getMaxPage = (item) => {
    console.log(item);

    if (item.length % 10 === 0) {
      setMaxPage(Math.floor(item.length / 10));
    } else setMaxPage(Math.floor(item.length / 10) + 1);
  };

  const gotoWheelDetails = (item) => {
    navigate(`/wheels/${item.wheel_id}`);
  };

  const generateProductList = () => {
    let printWheel = [];
    for (let i = 0; i < listWheel.length; i++) {
      // for (let j = 0; j < listWheel[i].wheel_details.length; j++) {
      if (listWheel[i].wheel_details[0]) {
        printWheel.push({
          wheel_id: listWheel[i].wheel_id,
          wheel_details_name: listWheel[i].wheel_name,
          wheel_details_image:
            listWheel[i].wheel_details[0].wheel_details_image,
        });
      }
      //   if (printWheel.length > 9) break;
      // }
    }

    if (printWheel) {
      return printWheel.map((item, index) => {
        if ((page - 1) * 10 < index + 1 && index + 1 <= page * 10)
          return (
            <div onClick={() => gotoWheelDetails(item)}>
              <ProductCard
                key={index}
                productImage={item.wheel_details_image}
                productName={item.wheel_details_name}
                // productPrice={item.wheelPrice}
              ></ProductCard>
            </div>
          );
      });
    }
  };

  let [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState("");

  const prevPage = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  const nextPage = () => {
    if (page >= maxPage) return;
    setPage(page + 1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setPage(1);
      getDataAllWheels();
    }
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleFilterInput = (event) => {
    setSortInput(event.target.value);
  };
  const handleSortInput = (event) => {
    setFilterInput(event.target.value);
  };

  return (
    <div className="w-full page-background flex justify-center">
      <div
        className="w-full mb-8 flex flex-col items-center"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <div className="w-11/12 md:w-10/12 flex flex-col justify-start mt-8 wheels-background p-2 md:p-12 rounded-2xl">
          <div className="mx-2">
            <Heading title={"Wheels"}></Heading>
            <div className="w-full flex flex-col gap-8 md:flex-row py-4 mb-4 rounded-xl">
              <div className="w-full md:w-1/4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                  />
                </svg>
                <input
                  onKeyDown={handleKeyDown}
                  className="input text-white text-lg md:text-xl xl:text-2xl ml-2 w-full"
                  placeholder="Search by Wheel's Name"
                  onChange={handleSearchInput}
                ></input>
              </div>
              <div className="w-full md:w-1/4 flex items-center">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => getDataAllWheels()}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="flex gap-1 sm:gap-4 md:gap-8 justify-center md:justify-between flex-wrap mb-8">
            {loading ? (
              <div className="w-48 h-48 my-12 mx-auto">
                <Loading></Loading>
              </div>
            ) : (
              <>{generateProductList()}</>
            )}

            <div className="w-full justify-end items-center mt-4 flex">
              <Button onClick={prevPage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="m14 17l-5-5l5-5z" />
                </svg>
              </Button>
              <div className="mx-2 text-white ">
                {page} / {maxPage}
              </div>
              <Button onClick={nextPage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M10 17V7l5 5z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wheels;
