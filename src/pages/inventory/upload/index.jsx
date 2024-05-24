import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";

import template from "../../../assets/template/format.webp";
import axios from "axios";
import Loading from "../../../components/base/Loading";
const API_URL = process.env.REACT_APP_API_URL;
function UploadInventory() {
  const [login, setLogin] = useState(false);
  const username = useRef("");
  const password = useRef("");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const uploadData = () => {
    setLoading(true);
    if (!data) {
      alert("Submitted Files cannot be Empty!");
    }
    if (!data[0].Name && !data[0].Stock) {
      alert("Data must contain Name and Stock!");
    }

    let body = {
      items: data,
    };
    axios
      .post(API_URL + "inventory", body)
      .then((res) => {
        setLoading(false);
        return alert("Submit Data Success");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        return alert("Submit Data Failed");
      });
  };

  const onLogin = () => {
    if (!username.current.value) {
      return alert("Username cannot be Empty");
    }
    if (!password.current.value) {
      return alert("Username cannot be Empty");
    }

    const body = {
        username : username.current.value,
        password : password.current.value
    }

    axios.post(API_URL + "user", body)
    .then((res)=>{
        setLogin(true);
    })
    .catch((err)=>{
        console.log(err)
        return alert(err.response.data);
    })

    
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      console.log(worksheet.A1);

      worksheet.A1.v = "Name";
      worksheet.A1.r = "<t>Name</t>";
      worksheet.A1.h = "Name";
      worksheet.A1.w = "Name";

      worksheet.B1.v = "Stock";
      worksheet.B1.r = "<t>Stock</t>";
      worksheet.B1.h = "Stock";
      worksheet.B1.w = "Stock";

      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  // Log the data whenever it changes
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="w-full page-background flex justify-center">
      <div className="w-10/12 flex flex-col p-8">
        <div className="w-full flex justify-center">
          {login ? (
            <div className="w-full flex flex-col">
              <div
                className="text-white text-4xl md:text-6xl font-bold my-8"
              >
                Upload Inventory Data
              </div>
              <div className="flex flex-col bg-white p-8">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".xlsx, .xls"
                />
                {data.length > 0 ? (
                  <button
                    disabled={loading}
                    onClick={() => uploadData()}
                    className="mb-8 transition-all py-2 mt-2 active:scale-95 bg-gray-800 w-full sm:w-64 font-bold text-white text-xl sm:text-xl border-[0.5px] hover:border-gray-400"
                  >
                    {loading ? (
                      <div>
                        <span class="loader"></span>
                      </div>
                    ) : (
                      <div>Submit File</div>
                    )}
                  </button>
                ) : (
                  <></>
                )}
                {data.length > 0 ? (
                  <table className="w-fit">
                    <thead>
                      <tr>
                        {Object.keys(data[0]).map((key) => (
                          <th className="border-2 border-black" key={key}>
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, index) => (
                        <tr key={index}>
                          {Object.values(row).map((value, idx) => (
                            <td className="border-2 border-black" key={idx}>
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div>
                    <div className="mt-8 mb-4 font-bold text-2xl">
                      Inventory Data Excel Example
                    </div>
                    <img src={template}></img>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="w-full md:w-1/2 wheels-background flex flex-col items-center text-white p-8 rounded-xl">
              <div className="text-4xl font-bold">Login</div>
              <input
                className="input text-black text-lg md:text-xl xl:text-2xl ml-2 w-full md:w-96 mt-8 outline-none"
                placeholder="Username"
                type="text"
                ref={username}
              ></input>
              <input
                className="input text-black text-lg md:text-xl xl:text-2xl ml-2 w-full md:w-96 mt-8 outline-none"
                placeholder="Password"
                type="password"
                ref={password}
              ></input>
              <button
                disabled={loading}
                onClick={() => onLogin()}
                className="mb-8 transition-all py-2 mt-14 active:scale-95 bg-gray-800 w-full sm:w-64 font-bold text-white text-xl sm:text-xl border-[0.5px] hover:border-gray-400"
              >
                {loading ? (
                  <div>
                    <span class="loader"></span>
                  </div>
                ) : (
                  <div>Login</div>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadInventory;
