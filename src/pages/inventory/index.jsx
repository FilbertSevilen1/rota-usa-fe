import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/base/Loading";
const API_URL = process.env.REACT_APP_API_URL;
function Inventory() {
  const [inventory, setInventory] = useState("");
  const getInventory = () => {
    axios
      .get(API_URL + "inventory")
      .then((res) => {
        setInventory(res.data);
      })
      .catch((err) => {
        toast.error("Failed to Get Data", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getInventory();
  }, []);
  return (
    <div className="w-full page-background flex justify-center">
      <div className="w-10/12">
        <div
          className="text-white text-4xl md:text-6xl font-bold my-8"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Our Inventory
        </div>
        <iframe
          className="w-full h-[75vh] bg-white shadow-md mb-8"
          src="http://rotausa.com/stock.htm"
          title="description"
        ></iframe>
        {/* {inventory.length > 0 ? (
          <div className="w-full md:w-fit p-8 bg-white mb-8">
            <table>
              <thead>
                <tr>
                  {Object.keys(inventory[0]).map((key) => (
                    <th
                      className="border-2 border-black text-xl p-1 text-left"
                      key={key}
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {inventory.map((row, index) => (
                  <tr key={index}>
                    {Object.values(row).map((value, idx) => (
                      <td
                        className="border-2 border-black text-xl p-1 min-w-24"
                        key={idx}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <div className="w-48 h-48 my-16">
              <Loading></Loading>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
export default Inventory;
